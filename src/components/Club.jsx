export default function Club({name, city, stadium, fans}){
    return(
        <>
        {
            fans>5000 ?  {/* here if the club doesn't have more than 5000 fans it is not displayed */}
            (
                <li>
                    {name} - {city} - {stadium}
                </li>
            ) : ( '')
        }
        </>
    )
}