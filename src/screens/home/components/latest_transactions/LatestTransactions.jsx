import React from 'react'
import "./latest_transactions.scss"

export default function LatestTransactions() {
    return (
        <div className='latest-transactions'>
            <div className="latest-transaction-container">
                <h3 className="title">
                    Latest Transactions
                </h3>
                <table className="transactions-table">
                    <tbody>

                    
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    <tr className='data'>
                        <td className="customer">
                            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="customer-image" />
                            <span className="customer-name">Lubshad</span>
                        </td>
                        <td>1 Jan 2022</td>
                        <td>$20000</td>
                        <td>
                            <span className="status">Approved</span>
                        </td>
                    </tr>
                    <tr className='data'>
                        <td className="customer">
                            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="customer-image" />
                            <span className="customer-name">Lubshad</span>
                        </td>
                        <td>1 Jan 2022</td>
                        <td>$20000</td>
                        <td>
                            <span className="status">Approved</span>
                        </td>
                    </tr>
                    <tr className='data'>
                        <td className="customer">
                            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="customer-image" />
                            <span className="customer-name">Lubshad</span>
                        </td>
                        <td>1 Jan 2022</td>
                        <td>$20000</td>
                        <td>
                            <span className="status">Approved</span>
                        </td>
                    </tr>
                    <tr className='data'>
                        <td className="customer">
                            <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="customer-image" />
                            <span className="customer-name">Lubshad</span>
                        </td>
                        <td>1 Jan 2022</td>
                        <td>$20000</td>
                        <td>
                            <span className="status">Approved</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
