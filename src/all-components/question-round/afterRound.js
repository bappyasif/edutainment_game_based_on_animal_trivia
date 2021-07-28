import { $all } from "../../all-utils/for-dom-calls"

export let announceResult = () => {
    let corrects = $all('.star--yellow').length
    let wrongs = $all('.star--red').length
    return corrects > wrongs ? [corrects, 'winner'] : [wrongs, 'loser']
}

// export {corrects, wrongs}