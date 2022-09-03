MonMessage = `test`;
NbrMessage = 10 
intervalMes = 1 // En seconde

bourerDeMessageMonPote(MonMessage, NbrMessage, intervalMes);

function bourerDeMessageMonPote(message, nombreDeMessage, interval) {
    for (let i = 0; i < nombreDeMessage * 2 ; i++) {
        setTimeout(() => {
            // a changer, si ce selecteur ne marche pas
            const SelecteurDeChampDeTexte = 'P.copyable-text.selectable-text';
            ecrireLeMessageDansLeChamp(document.querySelector(SelecteurDeChampDeTexte), message);
            actionDeClique();
        }, interval * 1000);
    }
    async function ecrireLeMessageDansLeChamp(el, leMessage) {
        if (el) {
            el.focus();
            if (!document.execCommand('insertText', false, leMessage)) {
                el.value = leMessage;
            }
            el.dispatchEvent(new Event('change', {bubbles: true}));
            console.log(i +' Sent...');
        }else{
            console.log('Erreur: Votre version de whatsapp n\'est pas compatble avec ce programme.')
            console.log('Erreur: Vous devriez modifer le code....')
        }
    }
    async function actionDeClique() {
            // a changer, si ce selecteur ne marche pas
            const SelecteurDeBoutonDeClique = 'button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq';
            if (document.querySelector(SelecteurDeBoutonDeClique)) document.querySelector(SelecteurDeBoutonDeClique).click();
    }
}