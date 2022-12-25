import { useState } from "react";


function Heroes() {

    const [names, setNames] = useState ([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ])

    const name = names.map((namer) => 
        <li key={namer.toString()}>{namer}</li>
    )
    return(
        <div>
            <ul>{name}</ul>
        </div>
    )
}

export default Heroes;