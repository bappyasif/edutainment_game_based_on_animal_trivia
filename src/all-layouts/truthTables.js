let implicationLawsLayout = () => {
    let htmlMarkup = document.createRange().createContextualFragment(`
        <table>
        <caption>Description: Implication Logic is FALSE if "A" is "true" and "B" is "false", rest of cases are TRUE</caption>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>A -> B</th>
            </tr>
            <tr>
                <td>True</td>
                <td>True</td>
                <td>True</td>
            </tr>
            <tr>
                <td>True</td>
                <td>False</td>
                <td>False</td>
            </tr>
            <tr>
                <td>False</td>
                <td>True</td>
                <td>True</td>
            </tr>
            <tr>
                <td>False</td>
                <td>False</td>
                <td>True</td>
            </tr>
        </table>
    `);
    return htmlMarkup;
}

let biconditionalLawsLayout = () => {
    let htmlMarkup = document.createRange().createContextualFragment(`
        <table>
        <caption>Description: Bi-Conditional Logic is TRUE when both "A" and "B" are same (True/False), otherwise FALSE</caption>
            <tr>
                <th>A</th>
                <th>B</th>
                <th>A <-> B</th>
            </tr>
            <tr>
                <td>True</td>
                <td>True</td>
                <td>True</td>
            </tr>
            <tr>
                <td>True</td>
                <td>False</td>
                <td>False</td>
            </tr>
            <tr>
                <td>False</td>
                <td>True</td>
                <td>False</td>
            </tr>
            <tr>
                <td>False</td>
                <td>False</td>
                <td>True</td>
            </tr>
        </table>
    `);
    return htmlMarkup;
}

export {implicationLawsLayout, biconditionalLawsLayout}