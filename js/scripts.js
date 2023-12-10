/**
 * Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
 * Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
 * MILESTONE 0:
 *      Creare l’array di oggetti con le informazioni fornite.
 * MILESTONE 1:
 *      Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
 * MILESTONE 2:
 *      Stampare le stesse informazioni su DOM sottoforma di stringhe
 * BONUS 1:
 *      Trasformare la stringa foto in una immagine effettiva
 * BONUS 2:
 *      Organizzare i singoli membri in card/schede
 * 
 * Team List:
 * Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
 * Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
 * Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
 * Angela Lopez	    Social Media Manager	angela-lopez-social-media-manager.jpg
 * Scott Estrada	Developer	            scott-estrada-developer.jpg
 * Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
 * 
 */

/**
 * Creiamo un array di oggetti dove ogni oggetto è caratterizzato da tre proprietà:
 * nameMember (il nome del membro)
 * tastMember (il ruolo del membro)
 * photoMember (la photo del membro)
 * 
 */





const teamList =
[
    {
        nameMember: 'Wayne Barnett',
        taskMember: 'Founder & CEO',
        photoMember: 'wayne-barnett-founder-ceo.jpg'
    }
    ,
    {
        nameMember: 'Angela Caroll',
        taskMember: 'Chief Editor',
        photoMember: 'angela-caroll-chief-editor.jpg'
    }
    ,
    { 		        
        nameMember: 'Walter Gordon',
        taskMember: 'Office Manager',
        photoMember: 'walter-gordon-office-manager.jpg'
    }
    ,
    { 	    	
        nameMember: 'Angela Lopez',
        taskMember: 'Social Media Manager',
        photoMember: 'angela-lopez-social-media-manager.jpg'
    }
    ,
    {		            
        nameMember: 'Scott Estrada',
        taskMember: 'Developer',
        photoMember: 'scott-estrada-developer.jpg'
    }
    ,
    {		   
        nameMember: 'Barbara Ramos',
        taskMember: 'Graphic Designer',
        photoMember: 'barbara-ramos-graphic-designer.jpg'
    }
]

/**
 * Facciamo un ciclo sulla teamList e per ogni i estraiamo un membro e ne stampiamo i vari campi in console
 */
for ( let i = 0; i < teamList.length; i++ )
{
    let member = teamList[i];
    console.log(`Memebr name : ${member.nameMember}`);
    console.log(`Member task : ${member.taskMember}`);
    console.log(`Member photo : ${member.photoMember}`);
    console.log('-------------------');
}