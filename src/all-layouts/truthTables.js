const implicationLawsLayout = () => {
    return document.createRange().createContextualFragment(`
        <table class="modal__body">
            <caption>Description: Implication Logic is <strong>FALSE</strong> if "A" is true and "B" is false. The rest of cases are <strong>TRUE</strong></caption>
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
};

const biconditionalLawsLayout = () => {
    return document.createRange().createContextualFragment(`
        <table class="modal__body">
            <caption>Description: Bi-Conditional Logic is <strong>TRUE</strong> when both "A" and "B" are same (either both are true or false), otherwise <strong>FALSE</strong></caption>
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
};

export { implicationLawsLayout, biconditionalLawsLayout };
