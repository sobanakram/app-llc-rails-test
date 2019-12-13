import React from "react"
import UserTable from "./UserTable";

class Main extends React.Component {
    render() {
        return (
            <div>
                <UserTable/>
            </div>
        );
    }
}

export default Main

// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: PropTypes.string
// }
//
// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
