<table border="1">
    <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Amount</th>
    </tr>

    {DataTransfer.map((t)=>(
        <tr style={{color:t.type==="credit"?"green":"red"}}>
            <td>{t.created_at}</td>
            <td>{t.type}</td>
            <td>{t.amount}</td>
        </tr>
    ))}
</table>