import React from 'react';
import './Department.css';
import Parcel from './Parcel';
import XMLData from './xmlfile.xml';
import { render } from '@testing-library/react';

function Department() {

  const [parcels, setParcels] = React.useState([
    {id:1 ,Weight: 0.02, Value: 0.0, signedInsurance: false, Description: [{Name: 'Vinny Gankema'}]},
    {id:2 ,Weight: 2.0, Value: 0.0, signedInsurance: false, Description: [{Name: 'Soner Colen'}]},
    {id:3 ,Weight: 100, Value: 2000.0, signedInsurance: false, Description: [{Name: 'Ricardus Proper'}]},
    {id:4 ,Weight: 11, Value: 500, signedInsurance: false, Description: [{Name: 'Alvaro ten Cate'}]},
    {id:5 ,Weight: 3.0, Value: 0, signedInsurance: false, Description: [{Name: 'Roland Lubben'}]},
    {id:6 ,Weight: 10.0, Value: 1500, signedInsurance: false, Description: [{Name: 'Ninon Spanjersberg'}]},
    {id:7 ,Weight: 10.0, Value: 1500, signedInsurance: false, Description: [{Name: 'Ninon Spanjersberg'}]},
    {id:8 ,Weight: 0.7, Value: 0, signedInsurance: false, Description: [{Name: 'Montana Martinus'}]},
    {id:9 ,Weight: 0.9, Value: 1100, signedInsurance: false, Description: [{Name: 'Aisling Kruizenga'}]},
    {id:10 ,Weight: 4.5, Value: 0, signedInsurance: false, Description: [{Name: 'Bernadet Spijker'}]},
    {id:11 ,Weight: 120, Value: 1500, signedInsurance: false, Description: [{Name: 'Collin Slaman'}]},
    {id:12 ,Weight: 130, Value: 2000, signedInsurance: false, Description: [{Name: 'Collin Slaman'}]},
    {id:13 ,Weight: 0.3, Value: 0, signedInsurance: false, Description: [{Name: 'Ingetje Hauwert'}]},
    {id:14 ,Weight: 1, Value: 0, signedInsurance: false, Description: [{Name: 'Amber van der Schaar'}]},
    {id:15 ,Weight: 15, Value: 100, signedInsurance: false, Description: [{Name: 'Willemtje Guldemond'}]},
    {id:16 ,Weight: 15, Value: 100, signedInsurance: false, Description: [{Name: 'Willemtje Guldemond'}]},
    {id:17 ,Weight: 0.4, Value: 0, signedInsurance: false, Description: [{Name: 'Zeki Soekhai'}]}
  ]);

  function signParcelInsurance(index) {
    const newParcels = [...parcels];
    const element = newParcels.find(parcel => parcel.id === index);
    const elementIndex = newParcels.indexOf(element);    
    newParcels[elementIndex].signedInsurance = true;
    setParcels(newParcels);
  };

  function signParcelOther(index) {
    const newParcels = [...parcels];
    const element = newParcels.find(parcel => parcel.id === index);
    const elementIndex = newParcels.indexOf(element);   
    newParcels.splice(elementIndex, 1);
    setParcels(newParcels);
    console.log(parcels)
  }; 

  var parseString = require('xml2js').parseString;
  const xml = `
  <?xml version="1.0" encoding="UTF-8" ?>
    <Container>
      <Id>68465468</Id>
      <ShippingDate>2016-07-22T00:00:00+02:00</ShippingDate>
      <parcels>
        <Parcel>
          <Receipient>
            <Name>Vinny Gankema</Name>
            <Address>
              <Street>Marijkestraat</Street>
              <HouseNumber>28</HouseNumber>
              <PostalCode>4744AT</PostalCode>
              <City>Bosschenhoofd</City>
            </Address>
          </Receipient>
          <Weight>0.02</Weight>
          <Value>0.0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Soner Colen</Name>
            <Address>
              <Street>Meester Willemstraat</Street>
              <HouseNumber>111</HouseNumber>
              <PostalCode>3036MN</PostalCode>
              <City>Rotterdam</City>
            </Address>
          </Receipient>
          <Weight>2.0</Weight>
          <Value>0.0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Ricardus Proper</Name>
            <Address>
              <Street>Nieuwstraat</Street>
              <HouseNumber>115</HouseNumber>
              <PostalCode>4724BE</PostalCode>
              <City>Wouw</City>
            </Address>
          </Receipient>
          <Weight>100.0</Weight>
          <Value>2000.0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Alvaro ten Cate</Name>
            <Address>
              <Street>Hoofdstraat</Street>
              <HouseNumber>97</HouseNumber>
              <PostalCode>9801BZ</PostalCode>
              <City>Zuidhorn</City>
            </Address>
          </Receipient>
          <Weight>11</Weight>
          <Value>500</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Roland Lubben</Name>
            <Address>
              <Street>Willem Bontekoestraat</Street>
              <HouseNumber>43</HouseNumber>
              <PostalCode>1212BZ</PostalCode>
              <City>Hilversum</City>
            </Address>
          </Receipient>
          <Weight>3.0</Weight>
          <Value>0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Ninon Spanjersberg</Name>
            <Address>
              <Street>Overmaat</Street>
              <HouseNumber>115</HouseNumber>
              <PostalCode>7524PB</PostalCode>
              <City>Enschede</City>
            </Address>
          </Receipient>
          <Weight>10.0</Weight>
          <Value>1500</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Ninon Spanjersberg</Name>
            <Address>
              <Street>Overmaat</Street>
              <HouseNumber>115</HouseNumber>
              <PostalCode>7524PB</PostalCode>
              <City>Enschede</City>
            </Address>
          </Receipient>
          <Weight>10.0</Weight>
          <Value>1500</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Montana Martinus</Name>
            <Address>
              <Street>Salamander</Street>
              <HouseNumber>147</HouseNumber>
              <PostalCode>3831ZA</PostalCode>
              <City>Leusden</City>
            </Address>
          </Receipient>
          <Weight>0.7</Weight>
          <Value>0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Aisling Kruizenga</Name>
            <Address>
              <Street>Oleanderlaan</Street>
              <HouseNumber>17</HouseNumber>
              <PostalCode>8024XC</PostalCode>
              <City>Zwolle</City>
            </Address>
          </Receipient>
          <Weight>0.9</Weight>
          <Value>1100</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Bernadet Spijker</Name>
            <Address>
              <Street>Paul Krugerstraat</Street>
              <HouseNumber>1</HouseNumber>
              <PostalCode>4443RC</PostalCode>
              <City>Nisse</City>
            </Address>
          </Receipient>
          <Weight>4.5</Weight>
          <Value>0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Collin Slaman</Name>
            <Address>
              <Street>Schoolstraat</Street>
              <HouseNumber>84</HouseNumber>
              <PostalCode>9581GD</PostalCode>
              <City>Musselkanaal</City>
            </Address>
          </Receipient>
          <Weight>120</Weight>
          <Value>1500</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Collin Slaman</Name>
            <Address>
              <Street>Berkengaarde</Street>
              <HouseNumber>176</HouseNumber>
              <PostalCode>2742TS</PostalCode>
              <City>Waddinxveen</City>
            </Address>
          </Receipient>
          <Weight>130</Weight>
          <Value>2000</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Ingetje Hauwert</Name>
            <Address>
              <Street>Berkengaarde</Street>
              <HouseNumber>176</HouseNumber>
              <PostalCode>2742TS</PostalCode>
              <City>Waddinxveen</City>
            </Address>
          </Receipient>
          <Weight>0.3</Weight>
          <Value>0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Amber van der Schaar</Name>
            <Address>
              <Street>Hoofdweg</Street>
              <HouseNumber>68</HouseNumber>
              <PostalCode>9765CN</PostalCode>
              <City>Paterswolde</City>
            </Address>
          </Receipient>
          <Weight>1</Weight>
          <Value>0</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Willemtje Guldemond</Name>
            <Address>
              <Street>Ringspoor</Street>
              <HouseNumber>30</HouseNumber>
              <PostalCode>2908BD</PostalCode>
              <City>Capelle aan den IJssel</City>
            </Address>
          </Receipient>
          <Weight>15</Weight>
          <Value>100</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Willemtje Guldemond</Name>
            <Address>
              <Street>Ringspoor</Street>
              <HouseNumber>30</HouseNumber>
              <PostalCode>2908BD</PostalCode>
              <City>Capelle aan den IJssel</City>
            </Address>
          </Receipient>
          <Weight>15</Weight>
          <Value>100</Value>
        </Parcel>
        <Parcel>
          <Receipient>
            <Name>Zeki Soekhai</Name>
            <Address>
              <Street>Duivenstraat</Street>
              <HouseNumber>125</HouseNumber>
              <PostalCode>4711KA</PostalCode>
              <City>Sint Willebrord</City>
            </Address>
          </Receipient>
          <Weight>0.4</Weight>
          <Value>0</Value>
        </Parcel>
      </parcels>
    </Container>
  `;

  return(
    <div className='department__section'>
      <div className='department__wrapper'>
        <h1 className='department__heading'>Departments</h1>
        <div className='department__container'>
          <div className='department__container-card'>
            <div className='department__container-cardInfo'>
              <h3>Insurance Department (Above 1000 EUR)</h3>                                
            </div>
            {parcels.filter(parcel => parcel.Value >= 1000 && !parcel.signedInsurance).map((parcel, index) => (  
            <Parcel
              parcel={parcel}
              signParcel={signParcelInsurance}
              index = {parcel.id}
            /> 
            ))} 
          </div>
          <div className='department__container-card'>
            <div className='department__container-cardInfo'>
              <h3>Mail Department (Under 1kg)</h3>
            </div>
            {parcels.filter(parcel => parcel.Weight <= 1 && parcel.Value < 1000 || parcel.Weight <=1 && parcel.Value >= 1000 && parcel.signedInsurance).map((parcel, index) => (   
            <Parcel
              parcel={parcel}
              signParcel={signParcelOther}
              index = {parcel.id}
            />  
            ))}  
          </div>
          <div className='department__container-card'>
            <div className='department__container-cardInfo'>
              <h3>Regular Department (1-10kg)</h3>
            </div>
            {parcels.filter(parcel => parcel.Weight <= 10 && parcel.Weight > 1 && parcel.Value < 1000 || parcel.Weight <=10 && parcel.Weight > 1 && parcel.Value >= 1000 && parcel.signedInsurance).map((parcel, index) => (    
            <Parcel
              parcel={parcel}
              signParcel={signParcelOther}
              index = {parcel.id}
            />    
            ))}  
          </div>
          <div className='department__container-card'>
            <div className='department__container-cardInfo'>
              <h3>Heavy Department (Above 10kg)</h3>
            </div>
            {parcels.filter(parcel => parcel.Weight > 10 && parcel.Value < 1000 || parcel.Weight > 10 && parcel.Value >= 1000 && parcel.signedInsurance).map((parcel, index) => (  
            <Parcel
              parcel={parcel}
              signParcel={signParcelOther}
              index = {parcel.id}
            />    
            ))}  
          </div>
        </div>
      </div>
    </div>
    

  ) 
}

export default Department;
