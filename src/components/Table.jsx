import React from 'react'
import ColHeader from './ColHeader'

export default function Table() {
    return (
        <div>
            <table rules='all' style={{ border: "1px solid white" }}>
                <thead>
                    <tr>
                        < ColHeader />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>R1, C1</td>
                        <td>R1, C2</td>
                        <td>R1, C3</td>
                    </tr>
                    <tr>
                        <td>R2, C1</td>
                        <td>R2, C2</td>
                        <td>R2, C3</td>
                    </tr>
                    <tr>
                        <td>R3, C1</td>
                        <td>R3, C2</td>
                        <td>R3, C3</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Footer C1</td>
                        <td>Footer C2</td>
                        <td>Footer C3</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
