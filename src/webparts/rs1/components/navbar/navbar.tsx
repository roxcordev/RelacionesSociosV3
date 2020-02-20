import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import './navbar.css';
import '../../styles/bootstrap.css';
import { InavbarProps } from './InavbarProps';
import { InavbarState } from './InavbarState';
import Contenido1 from '../contenido1/contenido1';
import Contenido2 from '../contenido2/contenido2';


export default class NavBasicExample extends React.Component<InavbarProps, InavbarState>{
    constructor(props: InavbarProps) {
        super(props)
        this.state ={typeComponent:"contenido 2"}
        
    }
   

    onClick(event, element) {
        this.setState({ typeComponent: element.key });
    }
    
    render() {
        let navbarLeft: JSX.Element;


        if(this.state.typeComponent=="contenido 1"){
            navbarLeft= <div><Contenido1/></div>;
           

        }
        if(this.state.typeComponent=="contenido2"){
            navbarLeft=<div><Contenido2/></div>
        }
        //let navbarCenter: JSX.Element[] = this.props.items.map((item)=> <div>{item.name}</div> )

        let navbarCenter: JSX.Element = <Nav
             
      
        groups={[
            {

                name: 'El Retrato de Dorian Gray',

                links: this.props.items
            }
        ]}
        onLinkClick={this.onClick.bind(this)}
    />


        return (
            <div>
               {navbarLeft}
               {navbarCenter}
            </div>
        )
    }
}



