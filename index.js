/**
 * Generation Code From :  http://stackoverflow.com/a/8809472
 */

    const STORE = require('electron-store');
    const store = new STORE();

function getOldKeys(){
    
    store.path = '/oldkeys.json';
    store.set('APIKeys', {
        keys:
        ['asdfasdfasdfasdf',
        'asdfashdfklasjdkf;ajs']
    });
   var keys = store.get('APIKeys');

   return keys.keys;
}

function generateUUID()
{

    // alert(getOldKeys().AccountService);

	var d = new Date().getTime();
	
	if( window.performance && typeof window.performance.now === "function" )
	{
		d += performance.now();
	}
	
	var uuid = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
	{
		var r = (d + Math.random()*16)%16 | 0;
		d = Math.floor(d/16);
		return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    
    return uuid;
}

document.getElementById('keygen').onclick = function()
{

    var newID = generateUUID();

    var oldKeys = getOldKeys();

    // if (oldKeys.includes(newID)){
    //     newID = generateUUID();
    // }



	document.getElementById('apikey').setAttribute('value', newID) ;
};

function newCode(){

}

