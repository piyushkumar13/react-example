import React, {PureComponent} from "react";
import "../../index.css"

/**
 * PureComponent implements shouldComponentUpdate lifecycle method by performing a shallow comparison on the props and state of the component.
 * If there is no difference in the props or state, the component is not re-rendered which gives performance boost.
 *
 * If parent component is PureComponent, the child component will also exhibit the pure component behaviour i.e they will render only when
 * there is a change in props or state, irrespective of whether child component is regular component or pure component.
 *
 * Alternative of PureComponent for functional components is Memo. React.Memo was introduced in React version 16.6
 * */
class PureComp extends PureComponent {

    render() {

        console.log("Pure Component rendering");
        return <h1 className="heading">Pure Component {this.props.providedName}</h1>
    }

}

export default PureComp;


function MemoComp(props) {

    console.log("Memo Component rendering")
    return (
        <>
            <h1 className="heading">Functional Memo Component {props.providedName}</h1>
        </>
    );
}

let MemoComponent = React.memo(MemoComp);
export {MemoComponent};