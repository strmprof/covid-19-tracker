import numeral from 'numeral';
import React from 'react'
import './Table.css';

function Table({countries}) {
    return (
        <div className="table">
            <table>
            {countries.map(({country, cases}) => {
                return (
                <tbody>
                <tr>
                    <td>{country}</td>
                    <td>
                        <strong>{numeral(cases).format('0,0')}</strong>
                    </td>
                </tr>
                </tbody>
                )
            })}
            </table>
        </div>
    );
}

export default Table
