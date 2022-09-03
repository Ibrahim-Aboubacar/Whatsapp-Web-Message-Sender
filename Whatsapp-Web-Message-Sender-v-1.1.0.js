MonMessage = `message ici`;
NbrMessage = 10
intervalMes = 1 // En seconde

bourerDeMessageMonPote(MonMessage, NbrMessage, intervalMes);

async function bourerDeMessageMonPote(message, nombreDeMessage, interval) {
  
    for (let i = 0; i < nombreDeMessage ; i++) {
            // a changer, si ce selecteur ne marche pas
            const SelecteurDeChampDeTexte = 'P.copyable-text.selectable-text';
            const ChampDeTexte = document.querySelector(SelecteurDeChampDeTexte);
            await ecrireLeMessageDansLeChamp(ChampDeTexte, message, interval);
            // a changer, si ce selecteur ne marche pas
            await actionDeClique('button.tvf2evcx.oq44ahr5.lb5m6g5c.svlsagor.p2rjqpw5.epia9gcq');
        }
  
    function ecrireLeMessageDansLeChamp(el, leMessage, interval) {
        return new Promise ((res, rej) =>{
        setTimeout(() => {
            if (el) {
                el.focus();
                if (!document.execCommand('insertText', false, leMessage)) {
                    el.value = leMessage;
                }
                el.dispatchEvent(new Event('change', {bubbles: true}));
                res(true);
            }else{
                rej(new Error('Erreur-Msg: Votre version de whatsapp n\'est pas compatble avec ce programme.\nErreur: Vous devriez modifer le code....'));
            }
        }, interval * 1000);
    })
    }
  
    function actionDeClique(SelecteurDeBoutonDeClique) {
        return new Promise((res, rej) => {
            if (document.querySelector(SelecteurDeBoutonDeClique)) {
                document.querySelector(SelecteurDeBoutonDeClique).click();
                console.log('Sent...');
                res(true);
            }else{
                rej(new Error('Erreur-Click: Votre version de whatsapp n\'est pas compatble avec ce programme.\nErreur: Vous devriez modifer le code....'));
            }
        })
    }
}
