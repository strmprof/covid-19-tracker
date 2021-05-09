import React from 'react'
import './Table.css';

function Table({countries}) {
    return (
        <div className="table">
            <table>
            {countries.map(({country, cases}) => {
                return (
                <tr>
                    <td>{country}</td>
                    <td>
                        <strong>{cases}</strong>
                    </td>
                </tr>
                )
            })}
            </table>
        </div>
    );
}

export default Table
