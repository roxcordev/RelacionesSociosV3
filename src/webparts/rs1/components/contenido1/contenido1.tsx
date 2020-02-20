import * as React from 'react';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  Modal,
  IconButton
} from 'office-ui-fabric-react';



export class Contenido1 extends React.Component<{}> {
  


  public render(): JSX.Element {
    return (
      <div>

       
         <div>
          <div className="ctrlInfoProject">
          <div className="titleToggle">Contenido 1</div>
            <div className="ms-Grid" dir="ltr">
              <div className="ms-Grid-row">                
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Gerente de proyectos<br /><span className="notTinyText">Romati, Pablo Andrés</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">PEP<br /><span className="notTinyText">RO619.16UO</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Ámbito de revisión<br /><span className="notTinyText">Clave</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Año de inicio<br /><span className="notTinyText">2019</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Tipo de proyecto<br /><span className="notTinyText">2</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Estrategia de desarrollo<br /><span className="notTinyText">Integral</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Área de reserva<br /><span className="notTinyText">Barrancas</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Fluido principal<br /><span className="notTinyText">Oil</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Proyecto<br /><span className="notTinyText">Proyecto / Subproyecto</span></p>
                </div>
                <div className="ms-Grid-col ms-sm6">
                  <p className="tinyText">Participación<br /><span className="notTinyText">100%</span></p>
                </div>
              </div>              
            </div>
          </div>
        </div >
      </div >
    );
  }

  

}


export default Contenido1;