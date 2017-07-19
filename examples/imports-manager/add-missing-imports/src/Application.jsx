import { sum } from 'src/Utils.js';
import _ from 'lodash';
export function Application(props) {
    return (
        <div>
            Products in shopping bag:
            <ul>
            {
                _.map((['Laptop', 'Smartphone']), (product) => {
                    return (<li>{product}</li>)
                })
            }
            </ul>
            Total is: {sum([1,2])}
        </div>
    )
}