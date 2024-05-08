import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onChange = () => {
    onChangeTab(tabId)
  }

  const activeClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
