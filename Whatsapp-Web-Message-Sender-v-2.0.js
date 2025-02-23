    async function bourerDeMessageMonPote(message, nombreDeMessage, interval) {
        // a changer, si les selecteurs ne marchent pas
        let SelecteurDeChampDeTexte = '.x1hx0egp.x6ikm8r.x1odjw0f.x1k6rcq7.x6prxxf p.selectable-text.copyable-text.x15bjb6t.x1n2onr6';
        let SelecteurDuBoutton = '.x1c4vz4f.x2lah0s.xdl72j9.xfect85.x1iy03kw.x1lfpgzf';

        // selectionont l'element qui nous interesse
        const ChampDeTexte = document.querySelectorAll(SelecteurDeChampDeTexte)[1];
    
        console.clear()
        const Disclaimer = `Disclaimer\n\nJe tiens à souligner que ce script est uniquement destiné à des fins éducatives et pour blaguer avec vos amis. Veuillez ne pas l’utiliser pour spammer les gens. L’utilisation de ce script à des fins illégales est strictement interdite. Je vous recommande de lire attentivement les conditions d’utilisation de WhatsApp avant d’utiliser ce script et de l’utiliser à vos propres risques et périls.`
        console.log(`%c${Disclaimer}`,'color: #f6aa60; font-weight: 700;')
        let success = true;
        if(confirm(Disclaimer)){
            await (new Promise((resolve, reject) => {
                ecrireLeMessageDansLeChamp(ChampDeTexte, '').then(async ()=>{
                    for (let i = 1; i <= nombreDeMessage  ; i++) {
                        // On patient 80% de notre interval, pour s'assurer que toute fonction precedente a fini son processus et etre dans les delais prevue
                        await sleep((interval * 1000) * 0.8)
        
                        ecrireLeMessageDansLeChamp(ChampDeTexte, message).then(async () => {
                            // On patient 10% de notre interval, pour s'assurer que toute fonction precedente a fini son processus
                            await sleep((interval * 1000) * 0.1)
        
                            // selectionont le bouton
                            let buttonEnvoyer = document.querySelector(SelecteurDuBoutton);
                            actionDeClique(buttonEnvoyer).then(async (ChampDeTexte) => {
                                // On patient 10% de notre interval, pour s'assurer que toute fonction precedente a fini son processus
                                await sleep((interval * 1000) * 0.1)
        
                                // On efface tout texte restant dans le champ, au cas ou suite a un bug, le texte y etait reste
                                ecrireLeMessageDansLeChamp(ChampDeTexte, '')
                            }).catch(() => success = false)
                        }).catch(()=> success = false)
                    }
                    resolve()
                })
            })).then(async () => {
                await sleep(1000)
                let ami = document.querySelectorAll('._2Ts6i._2xAQV .ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')[0].innerText;
                if(success){
                    let messageDeFin = nombreDeMessage +' messages envoyé a '+ ami +' !!!\n\n%cMessage: \''+ message +'\'\n\n%cJe rappelle que ce script est juste pour blaguer avec vos potes. Ne l\'utilisez surtout pas pour spam les gens.\n\n\nVous utilisez ce script à vos propres risques et périls.'
                    console.log(`%c${messageDeFin}`,'color: #06ff60; font-size: 16px; font-weight: 700;', 'color: #06ff60; font-size: 14px; font-weight: 500;','color: #06ff60; font-size: 12px; font-weight: 600;')
                    alert(messageDeFin.replace(/%c/g, ''))
                } else {
                    messageDeFin = 'Oups!!! Une erreur s\'est produite.\nAucun ou quelques messages ne seront pas envoyer a ' + ami + '.'
                    console.log(`%c${messageDeFin}`,'background-color: #ff000044 ;color: #ff0000; font-size: 16px; font-weight: 700;')
                    alert(messageDeFin.replace(/%c/g, ''))
                }
            }).catch(() => {
                let ami = document.querySelectorAll('._2Ts6i._2xAQV .ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr._11JPr')[0].innerText;
                messageDeFin = 'Oups!!! Une erreur s\'est produite.\nAucun ou quelques messages ne seront pas envoyer a ' + ami + '.'
                console.log(`%c${messageDeFin}`,'background-color: #ff000044 ;color: #ff0000; font-size: 16px; font-weight: 700;')
                alert(messageDeFin.replace(/%c/g, ''))
            });

        } else {
            alert('Les messages ne seront pas envoyer...')
            console.clear()
        }
    }
    function ecrireLeMessageDansLeChamp(el, leMessage) {
        return new Promise ((res, rej) =>{
            if (el) {
                el.focus();
                if (!document.execCommand('insertText', false, leMessage)) {
                    el.value = leMessage;
                }
                el.dispatchEvent(new Event('change', {bubbles: true}));
                res();
            }else{
                rej(new Error('Erreur-Msg: Votre version de whatsapp n\'est pas compatble avec ce programme.\nErreur: Vous devriez modifer le code....'));
            }
    })
    };

    function actionDeClique(BoutonDeClique) {
        return new Promise((res, rej) => {
            if (BoutonDeClique) {
                BoutonDeClique.click();
                console.log('%cSent...','color: #06ff60; font-size: 16px; font-weight: 700;');
                res();
            }else{
                console.log('%cUne erreur s\'est produite,\n%cLe bouton a cliqué n\'a pas pu etre selectioné','background-color: #ff000044 ;color: #ff0000; font-size: 16px; font-weight: 700;','color: #ff0000; font-size: 13px; font-weight: 600;');
                rej(new Error('Erreur-Click: Votre version de whatsapp n\'est pas compatble avec ce programme.\nErreur: Vous devriez modifer le code....'));
            }
        })
    }

    /**
     * Permet de retenir le code pendant le nombre de millisecondes passe en parametre comme sleep() en PHP. Merci a javatpoint.com
     * Source: https://www.javatpoint.com/javascript-sleep
     * @param {Integer} milliseconds 
     * @returns Promise
     */
    function sleep(milliseconds) { return new Promise(resolve => setTimeout(resolve, milliseconds)); }

    let MonMessage = `test`;
    let NbrMessage = 5
    let interval = 1 // En seconde
    bourerDeMessageMonPote(MonMessage, NbrMessage, interval);
