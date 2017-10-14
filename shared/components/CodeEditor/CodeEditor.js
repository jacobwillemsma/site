import React from 'react'
import PropTypes from 'sb-proptypes'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian } from 'react-syntax-highlighter/dist/styles'

import cssModules from 'react-css-modules'
import styles from './CodeEditor.scss'


const lineNumberClassName = 'react-syntax-highlighter-line-number'

const codeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="img" aria-labelledby="title-s260x81" style={{ maxHeight: '100%', maxWidth: '100%', overflow: 'hidden', verticalAlign: 'bottom' }}>
    <path d="M14.155 4.055a1 1 0 0 0-1.271.62l-4.83 14.046a1 1 0 0 0 1.891.65l4.83-14.045a1 1 0 0 0-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 1 0-1.392-1.436l-3.54 3.432a1 1 0 0 0 0 1.436l3.32 3.219a1 1 0 1 0 1.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 1 0-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 1 0 1.392 1.436l3.54-3.432a1 1 0 0 0 0-1.436" fill="#fff" fillRule="evenodd" role="presentation"/>
  </svg>
)

@cssModules(styles, { allowMultiple: true })
export default class CodeEditor extends React.Component {

  static propTypes = {
    isEditable: PropTypes.bool,
  }

  startSelectLineNumber = null
  endSelectLineNumber = null

  componentDidMount() {
    this.lineNumberNodes = Array.prototype.slice.call(this.editorNode.getElementsByClassName(lineNumberClassName))

    this.bindListener()
  }

  componentWillUnmount() {
    this.unbindListener()
  }

  bindListener() {
    document.addEventListener('click', this.handleNumberClick)
  }

  unbindListener() {
    document.removeEventListener('click', this.handleNumberClick)
  }

  handleNumberClick = (event) => {
    const { isEditable, onRangeSelected } = this.props

    if (!isEditable) {
      return
    }

    if (event.target.className.indexOf(lineNumberClassName) >= 0) {
      const selectedIndex = this.lineNumberNodes.indexOf(event.target)

      if (this.startSelectLineNumber !== null && this.endSelectLineNumber !== null) {
        this.lineNumberNodes[this.startSelectLineNumber].classList.remove(styles.activeLineNumber)
        this.lineNumberNodes[this.endSelectLineNumber].classList.remove(styles.activeLineNumber)

        for (let i = this.startSelectLineNumber + 1; i < this.endSelectLineNumber; i++) {
          this.lineNumberNodes[i].classList.remove(styles.activeMidLineNumber)
        }

        this.startSelectLineNumber = null
        this.endSelectLineNumber = null
      }

      if (this.startSelectLineNumber !== null) {
        if (selectedIndex > this.startSelectLineNumber) {
          this.endSelectLineNumber = selectedIndex
        }
        else {
          this.endSelectLineNumber = this.startSelectLineNumber
          this.startSelectLineNumber = selectedIndex
        }
      }
      else {
        this.startSelectLineNumber = selectedIndex
      }

      event.target.classList.add(styles.activeLineNumber)

      if (this.startSelectLineNumber !== null && this.endSelectLineNumber !== null) {
        for (let i = this.startSelectLineNumber + 1; i < this.endSelectLineNumber; i++) {
          this.lineNumberNodes[i].classList.add(styles.activeMidLineNumber)
        }

        onRangeSelected({
          start: this.startSelectLineNumber + 1,
          end: this.endSelectLineNumber + 1,
        })
      }
    }
  }

  render() {
    const { children } = this.props

    return (
      <div styleName="codeEditor" ref={(el) => this.editorNode = el}>
        <div styleName="header">
          <div styleName="title">Solidity</div>
          {codeIcon}
        </div>
        <div styleName="code">
          <SyntaxHighlighter language="javascript" style={obsidian} showLineNumbers>
            {children || `pragma solidity ^0.4.0;

  import "./Structures.sol";
  import "./DealExtension.sol";

  contract Deal is DealExtension {

    Structures.DealInfo dealInfo;
    Structures.DealParty dealParty;
    Structures.ProposedChanges proposedChanges;

    address[] public executors;

    bool executorAcceptChanges;
    bool customerAcceptChanges;
    bool executorConfirmDeal;
    bool customerConfirmDeal;
    bool onTime;
    bool executorFinish;

    uint startDate;
    uint executorsAmount;

    modifier onlyMember {
      require(msg.sender == dealParty.customer || msg.sender == dealParty.executor);
      _;
    }

    modifier onlyCustomer {
      require(msg.sender == dealParty.customer);
      _;
    }
    modifier onlyExecutor {
      require(msg.sender == dealParty.executor);
      _;
    }


    function Deal(address customerAddress,string title, string description, string attachment, uint deposit, uint dealTime, uint payForWork) {
      require(payForWork <= deposit);
      dealInfo = Structures.DealInfo(title, description, attachment, deposit, dealTime, payForWork);
      dealParty.customer = customerAddress;

    }

    function getExecutors() returns(address[]) {
      return executors;
    }

    // test
    function getCustomer() returns(address) {
      return dealParty.customer;
    }

    function becomeExecutor()  {
      require(dealParty.executor == 0x0);
      executors.push(msg.sender);
      executorsAmount = executors.length;
    }

    function acceptExecutor(uint index) {
      dealParty.executor = executors[index];
    }

    function proposeChanges(string attachment, uint deposit, uint dealTime) onlyMember {
      require(executorConfirmDeal == false && customerConfirmDeal == false);
      proposedChanges = Structures.ProposedChanges(attachment, deposit, dealTime);
    }

    function acceptChanges() onlyMember {
      if (msg.sender == dealParty.executor) {
        executorAcceptChanges = true;
      }
      else {
        customerAcceptChanges = true;
      }
      if (customerAcceptChanges && executorAcceptChanges){
        dealInfo.attachment = proposedChanges.attachment;
        dealInfo.deposit = proposedChanges.deposit;
        dealInfo.dealTime = proposedChanges.dealTime;
      }
    }


    function depositMoney() payable {}

    function startDeal() onlyMember {

      require(this.balance >= dealInfo.deposit);
      require(dealParty.executor != nullx0);
      require(customerConfirmDeal && executorConfirmDeal);

      startDate = now;
    }

    function confirmDeal() onlyMember {
      if (msg.sender == dealParty.executor){
        executorConfirmDeal = true;
      }
      if (msg.sender == dealParty.customer){
        customerConfirmDeal = true;
      }
    }

    function finishWork() onlyExecutor {
      if ((now - startDate) > dealInfo.dealTime) {
        onTime = false;
      }
      else {
        onTime = true;
      }
      executorFinish = true;
    }

    function finishDeal() onlyCustomer {
      require(executorFinish);
      msg.sender.transfer(dealInfo.deposit);
    }
  }
  `}
          </SyntaxHighlighter>
        </div>
      </div>
    )
  }
}
