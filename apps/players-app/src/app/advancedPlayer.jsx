import {useParams } from 'react-router-dom';

export function AdvancedPlayer(){
    let { name } = useParams();

    return(<p>{name}</p>)

}
export default AdvancedPlayer;