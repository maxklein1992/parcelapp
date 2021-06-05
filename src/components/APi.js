import XMLData from './xmlfile.xml';

function api() {
    var rawFile = new XMLHttpRequest();
rawFile.open("GET", XMLData, false);
rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
            var xmlasstring = rawFile.responseText;
            console.log('Your xml file as string', xmlasstring)
        }
    }
}
return null;

}



export default api;