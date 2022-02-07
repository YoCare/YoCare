export default {
  quizRunning: false,
  destination: {
    "consigli": {
      title: "Consigli",
      description: "In questa sezione verranno forniti consigli su rimedi/trattamenti e prevenzione per ogni malattia o problematica trattata per ogni sezione del corpo indicata dall’immagine interattiva, il nostro omino <b>Jeff</b>. \
      <br><br>Per visualizzare gli elementi accessibili cliccare su una parte del corpo di <b>Jeff</b>. \
      ",
      image: null,
      topics: {
        "acne": {
          title: "Acne",
          description: "<h3><i>Rimedi</i></h3>Quando si ha l'acne occorre lavarsi poco, non strofinare ed utilizzare poco sapone. Nei casi con molta infiammazione, poi, il sapone va sostituito con una crema da lavaggio. <br><br><b><i><u>Nota bene:</u></i></b> al fine di garantire un corretto trattamento è fortemente consigliato rivolgersi ad uno specialista (dermatologo), al fine di poter stabilire le cause e adottare la cura più adeguata.\
          <br><br><h3><i>Prevenzione</i></h3>Se si è predisposti all'Acne occorre:\
          <ul><li><b>Evitare</b> di applicare <b>creme sul volto</b>, comprese quelle solari;</li>\
              <li><b>Non utilizzare trucchi in crema</b> come i fondotinta, ma trucchi minerali;</li>\
              <li>Struccarsi con creme da lavaggio e non con latte detergente;</li>\
              <li><b>Evitare di schiacciare i punti neri ed evitare la pulizia del volto;</b></li>\
              <li><b>Evitare</b> le forti esposizioni al sole, e le lampade UV.</li>\
          </ul>",
          image: null
        },
        "dermatite": {
          title: "Dermatite",
          description: "<h3><i>Prevenzione</i></h3>Si raccomanda di <b>evitare bagni e lavaggi troppo frequenti</b>, perché la pulizia eccessiva e l'uso di saponi più o meno aggressivi finisce per impoverire la pelle degli strati esterni che la proteggono. È bene anche <b>evitare che la pelle sia eccessivamente secca</b>, utilizzando le apposite creme idratanti. Ed è preferibile l’utilizzo di <b>indumenti di cotone</b> evitando quelli in fibra sintetica.\
          <br><br><h3><i>Diagnosi</i></h3>Per avere una diagnosi corretta e la prescrizione di una cura opportuna è necessario effettuare una visita dermatologica.",
          image: null
        },
        "verruca": {
          title: "Verruca",
          description: "<h3><i>Trattamento</i></h3>Solitamente, le verruche scompaiono spontaneamente, tuttavia, possono essere trattate con metodi distruttivi (mediante escissione, cauterizzazione, crioterapia, azoto liquido) e farmaci topici o iniettabili.\
          <br><br><h3><i>Prevenzione</i></h3>Per evitare la comparsa delle verruche è bene:\
          <ul><li><b>Evitare</b> il <b>contatto diretto</b> con le verruche altrui o con le proprie;</li>\
              <li><b>Curare</b> particolarmente lo <b>stato di igiene della pelle</b> (la presenza di lesioni cutanee facilita l'ingresso dei virus, mentre una pelle sana, bene idratata e priva di ferite è più resistente all'attacco virale);</li>\
              <li><b>Evitare di condividere oggetti</b> \"a rischio\" <b>di contagio</b> come asciugamani, accappatoi e oggetti per la cura delle unghie;</li>\
              <li>Per <b>prevenire le verruche plantari</b> occorre utilizzare ciabatte o infradito personali nel percorso piscina/doccia/palestra.</li>\
          </ul>",
          image: null
        },
        "lipoma": {
          title: "Lipoma (tumore benigno)",
          description: "<h3><i>Prevenzione</i></h3>Attualmente non esistono modi di prevenzione del lipoma, ma sono valide alcune regole di prevenzione generale per un <b>corretto stile di vita</b>, come:\
          <ul><li>Peso corporeo, è importante mantenere il peso forma poiché il rischio di sviluppare varie malattie aumenta con l’obesità;</li>\
              <li>Dieta, ridurre l’assunzione di grassi animali, carni rosse e salumi ed aumentare il consumo di frutta, verdure e fibre;</li>\
              <li>Alcol, limitarne il consumo;</li>\
              <li>Fumo, smettere di fumare;</li>\
              <li>Sole, non esporsi nelle ore più calde della giornata. Limitare l'uso di lampade abbronzanti.</li>\
          </ul>",
          image: null
        },
        "otite": {
          title: "Otite",
          description: "<h3><i>Cura</i></h3>L'otite media acuta tende a risolversi spontaneamente nell'arco di qualche giorno, in alcuni casi però, è necessario intervenire farmacologicamente. È possibile applicare degli impacchi caldi sull'orecchio per alleviare temporaneamente il dolore causato dall'otite media.\
          <br><br><h3><i>Prevenzione</i></h3>Esistono semplici azioni quotidiane per prevenire le infezioni alle orecchie:\
          <ul><li>Evitare temperature e umidità eccessive negli ambienti domestici;</li>\
              <li>Asciugare le orecchie dopo la doccia o il bagno e proteggerle in inverno;</li>\
              <li>Lavarsi bene le mani dopo aver tossito o starnutito;</li>\
              <li>Evitare il contatto con persone malate da molto tempo, l'otite è una malattia contagiosa;</li>\
              <li>Prendersi cura di malattie come raffreddori o rinofaringite;</li>\
              <li>Richiedere un appuntamento con un otorinolaringoiatra se vengono identificati sintomi indicativi di infezioni alle orecchie.</li>\
          </ul>",
          image: null
        },
        "acufene": {
          title: "Acufene",
          description: "<h3><i>Prevenzione</i></h3>Per prevenire il presentarsi dell’acufene è bene far attenzione a non danneggiare l’udito e, in particolare, a evitare il trauma acustico, riducendo perciò l’esposizione a suoni troppo intensi.",
          image: null
        },
        "parotite": {
          title: "Parotite (orecchioni)",
          description: "<h3><i>Possibili complicanze</i></h3>Le <b>complicazioni</b> della parotite sono <b>molto rare</b>, ma potrebbe succedere di essere colpiti da meningite asettica benigna, danni permanenti all’udito e pancreatite. \
          <br><br><h3><i>Prevenzione</i></h3>Oltre al rispetto delle <b>buone norme igieniche</b>, l’arma migliore contro la malattia è la <b>vaccinazione</b>. Il vaccino è offerto gratuitamente e obbligatorio per i nati dal 2017, mentre per gli adulti che non sono mai stati vaccinati sono previste due dosi a distanza di almeno 4 settimane.",
          image: null
        },
        "labirintite": {
          title: "Labirintite (vertigini)",
          description: "<h3><i>Prevenzione</i></h3>Per prevenire la labirintite, in caso di infezioni influenzali e raffreddamenti, in particolare in presenza di infiammazione dell’orecchio medio, bisogna fare in modo di <b>decongestionare</b> l’orecchio e di consentire la sua sufficiente ventilazione.",
          image: null
        },
        "gastrite": {
          title: "Gastrite",
          description: "<h3><i>Complicazioni</i></h3>Le complicazioni della gastrite includono:\
            <ul><li>Ulcera dello stomaco;</li>\
                <li>Polipi (piccole escrescenze) all’interno dello stomaco;</li>\
                <li>Tumori benigni o maligni dello stomaco (neoplasie gastriche).</li>\
            </ul>\
          <br><h3><i>Prevenzione</i></h3>Per prevenire il presentarsi della gastrite è bene seguire i successivi comportamenti:\
          <ul><li><b>Lavare spesso le mani</b> con acqua e sapone per <b>ridurre</b> il <b>rischio d'infezioni</b>;</li>\
              <li>Mangiare <b>cibi ben cotti</b> per evitare infezioni;</li>\
              <li>Ridurre lo stress;</li>\
              <li><b>Non</b> bere alcolici;</li>\
              <li><b>Non</b> fumare;</li>\
              <li>Seguire una <b>dieta sana</b> e <b>bilanciata</b>, priva di eccessi ed alimenti potenzialmente irritanti per la mucosa gastrica.</li>\
          </ul>",
          image: null
        },
        "crohn": {
          title: "Morbo di Crohn",
          description: "<h3><i>Prevenzione</i></h3>Purtroppo, non si può prevenire l’insorgenza della malattia di Crohn, ma si possono prevenirne le complicanze e l’evoluzione:\
            <ul><li>Eseguire <b>esami del sangue e delle feci</b> ogni 6-12 mesi, e un esame non invasivo dell’addome (ecografia TC o RMN) almeno ogni anno, integrato, se necessario da una colonscopia;</li>\
                <li><b>Prevenzione delle neoplasie intestinali</b> eseguendo una colonscopia con biopsie ogni 12 mesi in caso di morbo di Crohn estesa nel colon, a partire dai 10 anni dalla diagnosi;</li>\
                <li><b>Prevenzione delle infezioni opportunistiche</b>.</li>\
            </ul>",
          image: null
        },
        "emorroidi": {
          title: "Emorroidi",
          description: "<h3><i>Prevenzione</i></h3>Seguire uno stile di vita sano, curando in particolar modo l'alimentazione, è fondamentale per limitare l'insorgere del problema. Per prevenire l’insorgere delle emorroidi è bene ridurre l’uso dei seguenti alimenti:\
          <ul><li>Bibite gassate e alcolici;</li>\
              <li>Cioccolato e dolci;</li>\
              <li>Solanacee come melanzane, pomodori e peperoni: contengono solanina, una sostanza tossica che, a lungo andare, può danneggiare le pareti intestinali;</li>\
              <li>Alimenti in scatola e sottaceti;</li>\
              <li>Consumo eccessivo di sale o bicarbonato;</li>\
              <li>Formaggi stagionati e fermentati;</li>\
              <li>Alimenti fritti;</li>\
              <li>Tartufo;</li>\
              <li>Crostacei e molluschi;</li>\
              <li>Peperoncino e salse piccanti.</li>\
          </ul>",
          image: null
        },
        "dispepsia": {
          title: "Dispepsia",
          description: "<h3><i>Prevenzione</i></h3>Per prevenire la comparsa di dispepsia funzionale è prima di tutto importante seguire una nutrizione sana ed equilibrata e seguire abitudini corrette come masticare lentamente, fare pasti regolari (colazione, pranzo e cena) e ridurre stress e ansia. Inoltre, per non appesantire la digestione è bene evitare piatti troppo elaborati o pesanti.",
          image: null
        },
        "carie-dentale": {
          title: "Carie dentale",
          description: "<h3><i>Trattamento</i></h3>Il trattamento d'elezione per la cura delle carie superficiali è <b>l'otturazione</b>, ovvero la letterale sigillatura di tutte le fessure che i batteri, divorando assiduamente smalto e dentina, hanno procurato al dente (ciò richiede un <b>intervento dentistico</b>). Quando la carie inizia il suo processo demolitivo anche nella polpa dentale, bisogna <b>devitalizzare</b> il dente.\
          <br><br><h3><i>Prevenzione</i></h3>Il miglior gesto che possiamo fare per salvaguardare la salute dei denti da carie e da altre infezioni dentali consiste, indubbiamente, nel <b>mettere in pratica tutte le regole basilari della prevenzione dentale</b> (cioè usare spazzolino, dentifricio, filo interdentale e collutorio).",
          image: null
        },
        "gengivite": {
          title: "Gengivite",
          description: "<h3><i>Rimedi</i></h3> Se la gengivite non è grave, basta <b>intraprendere una buona igiene orale</b>, che comprenda sia l'uso dello spazzolino da denti e sia del filo interdentale, e <b>sull'eliminazione di tutti quei fattori causali e di rischio associati al disturbo infiammatorio</b> (per esempio fumare). Se la gengivite è grave, risulta necessario <b>l’intervento del dentista</b> con un’opera di igiene orale professionale.\
          <br><br><h3><i>Prevenzione</i></h3>Per prevenire la gengivite, è fondamentale una <b>regolare e corretta igiene orale</b>, che combini l'utilizzo dello spazzolino a quello del filo interdentale e, se necessario, pure dello scovolino e del collutorio. <br>È buona norma sottoporsi ogni 6-12 mesi all'igiene dentale professionale (ossia l'igiene effettuata dal dentista). Ovviamente aiuta anche non fumare e limitare/evitare il consumo di alcolici.",
          image: null
        },
        "parodontite": {
          title: "Parodontite",
          description: "<h3><i>Trattamento</i></h3> La parodontite dev'essere curata non appena compaiono i primissimi sintomi della malattia. Sono disponibili differenti rimedi odontoiatrici per rovesciare la malattia come rimozione della placca e del tartaro dai denti e sotto le gengive o la levigatura radicolare (cioè rimozione del tartaro nascosto sotto la gengiva).\
          <br><br><h3><i>Prevenzione</i></h3>Il miglior mezzo di prevenzione della parodontite consiste nella <b>pulizia regolare e accurata dei denti e degli interstizi</b>; non solo spazzolino, dunque, ma anche filo interdentale. Anche <b>l'astensione dal fumo</b> è d'aiuto, poiché le tossine in esso contenute non possono che facilitare l'azione lesiva dei batteri. \
          <br>L'assicurazione sulla salute dei propri denti è completata da regolari controlli odontoiatrici, che permettono di riconoscere i segni precoci della parodontite e ad intraprendere interventi mirati.",
          image: null
        },
        "afte": {
          title: "Afte",
          description: "<h3><i>Trattamento</i></h3> Dal momento che le afte in bocca tendono a <b>regredire spontaneamente nell'arco di una manciata di giorni</b>, in linea di massima si tende a scartare l'opzione terapica farmacologica, lasciando fare il suo corso alla lesione. Nei casi in cui le afte alla bocca divengono particolarmente dolorose, <b>si consiglia di risciacquare il cavo orale con collutori specifici</b>.\
          <br><br><h3><i>Prevenzione</i></h3>Poiché non si sa l’effettiva causa delle afte, è difficile dire quale siano le prevenzioni da seguire. Dalle statistiche si comprende come la comparsa delle afte alla bocca sia <b>pesantemente influenzata dalla carenza di alcune vitamine</b> (soprattutto acido folico) e <b>minerali</b>, come zinco e ferro (soprattutto). \
          <br>Quando compaiono, in linea di massima per non aggravare la piaga orale, si consiglia di porre particolare attenzione alla pulizia dei denti: un utilizzo particolarmente energico dello spazzolino può, infatti, accentuare la lesione, rompere la piaga e prolungare i tempi di rimarginazione.",
          image: null
        },
        "mughetto": {
          title: "Mughetto",
          description: "<h3><i>Trattamento</i></h3> Il trattamento del mughetto dipende dall'entità dell'infezione e delle sue manifestazioni; nelle forme più lievi possono essere impiegati <b>appositi collutori o risciacqui con soluzioni alcaline</b> (bicarbonato di sodio, borato di sodio) o acqua ossigenata. Se il mughetto interessa un bambino allattato al seno, le applicazioni debbono essere estese anche al capezzolo e all'areola della madre; in simili situazioni, è altrettanto importante sterilizzare tettarelle e ciucci prima dell'uso.\
          <br><br><h3><i>Prevenzione</i></h3>La misura profilattica più importante consiste nel <b>non modificare l'equilibrio della flora batterica locale e nel seguire uno stile di vita sano</b> che mantenga ben efficienti le difese immunitarie dell'ospite. \
          <br>La prevenzione del diabete di tipo II - tramite una sana alimentazione, il controllo del peso corporeo e la regolare attività fisica - si traduce anche in un'efficace opera profilattica nei confronti del mughetto. La crescita della candida orale è infatti favorita dalla presenza di abbondanti quantità di zucchero nella saliva, che contiene glucosio in concentrazioni analoghe a quelle del sangue.",
          image: null
        },
        "herpes-labiale": {
          title: "Herpes labiale",
          description: "<h3><i>Trattamento</i></h3> Purtroppo, non esiste ancora una terapia in grado di risolvere definitivamente l'herpes labiale. Quando si manifesta, l'herpes labiale <b>si risolve in modo spontaneo dopo circa una settimana</b> dalla comparsa delle prime vescicole. Per accelerare la guarigione, esistono dei farmaci che possono aiutare allo scopo.\
          <br><br><h3><i>Prevenzione</i></h3>Per prevenire la diffusione dell'infezione è fondamentale osservare alcune norme igieniche. È importante <b>lavarsi spesso le mani</b> con acqua e sapone, soprattutto dopo aver toccato le vescicole o l'applicazione di eventuali pomate. \
          <br>Altra importante precauzione da prendere è quella di <b>non toccare o grattare le vescicole dell'herpes labiale</b>, ma soprattutto dev'essere evitato il successivo contatto con occhi, naso, genitali e altre parti del corpo. Se le vescicole si rompono, l'infezione erpetica può propagarsi ad altre zone del viso o della pelle, o può verificarsi una sovra infezione. \
          <br>Infine, <b>non dovrebbero essere condivisi</b> asciugamani, posate, rasoi, rossetti e altri oggetti che possono venire a contatto con le lesioni dell'herpes labiale e potrebbero divenire mezzi di trasmissione dell'infezione.",
          image: null
        },
        "raffreddore": {
          title: "Raffreddore",
          description: "<h3><i>Rimedi</i></h3> La completa guarigione dal raffreddore avviene normalmente <b>nel giro di 5-10 giorni</b>. Non esistono cure specifiche contro il raffreddore anche se <b>alcuni farmaci</b>, tra cui gli antistaminici e gli antinfiammatori, <b>possono alleviarne i sintomi</b>. Gli antibiotici non devono essere usati per trattare un comune raffreddore. Non aiutano e possono rivelarsi addirittura dannosi.\
          <br><br><h3><i>Prevenzione</i></h3>Per prevenire il raffreddore è utile <b>non utilizzare gli stessi tovaglioli o posate</b> di chi è colpito da raffreddore, <b>portare un fazzoletto alla bocca quando si starnutisce</b>, <b>lavarsi spesso le mani</b>, in particolar modo prima di mangiare, cercare di <b>tenere le mani lontano dal naso e dalla bocca</b>, <b>evitare l'esposizione a intemperie e sbalzi di temperature</b> in genere e aumentare il <b>consumo di liquidi</b>.",
          image: null
        },
        "bronchite": {
          title: "Bronchite",
          description: "<h3><i>Trattamenti</i></h3> Innanzitutto, il corretto approccio alla bronchite prevede <b>la rimozione delle cause che la provocano</b>, come il fumo e l'esposizione agli inquinanti. Per alleviare i sintomi e facilitare la guarigione, la terapia di supporto prevede <b>un'idratazione adeguata abbinata a riposo</b>: bere molto favorisce, infatti, la fluidificazione delle secrezioni mucose.\
          <br><br><h3><i>Prevenzione</i></h3> Per prevenire l'insorgenza e l'evoluzione della bronchite è di fondamentale importanza <b>ridurre l'esposizione complessiva al fumo di tabacco, alle polveri in ambito professionale ed all'inquinamento degli ambienti interni ed esterni</b>.",
          image: null
        },
        "polmonite": {
          title: "Polmonite",
          description: "<h3><i>Trattamenti</i></h3> Le <b>polmoniti batteriche</b> sono generalmente trattate con <b>antibiotici</b>. <br>Nelle <b>polmoniti virali</b> la strategia di intervento si limita generalmente al <b>riposo e alla generosa assunzione di liquidi</b>. Solo in determinate circostanze vengono prescritti <b>farmaci antivirali</b>.\
          <br><br><h3><i>Prevenzione</i></h3> Per ridurre il rischio di sviluppare una polmonite risultano utili: <b>l'accurato lavaggio delle mani, l'astensione dal fumo e l'impiego di mascherine per evitare il contatto con agenti inquinanti o fortemente irritanti</b>. Inoltre, sono disponibili appositi <b>vaccini</b> per prevenire alcune forme di polmonite infettiva, come quella influenzale e quella da pneumococco.",
          image: null
        },
        "tubercolosi": {
          title: "Tubercolosi",
          description: "<h3><i>Trattamenti</i></h3>Solitamente il trattamento comprende <b>l’assunzione di diversi farmaci per un lungo periodo di tempo</b> (tra i sei e gli otto mesi). I farmaci in questioni sono delle <b>combinazioni farmacologiche</b> utili sia per <b>ridurre la carica batterica</b> in modo tempestivo, sia per <b>prevenire la formazione di parassiti</b> resistenti per poi, nell’ultimo periodo della terapia, usare dei <b>farmaci per rimuovere completamente i bacilli</b>.\
          <br><br><h3><i>Prevenzione</i></h3><b>La vaccinazione</b> per la profilassi della tubercolosi (vaccini BCG, bacillo di Calmette-Guérin) è utile per favorire una certa sensibilità nei confronti del bacillo tubercolare Mycobacterium tuberculosis. La vaccinazione rappresenta una misura preventiva della tubercolosi, la cui indicazione è limitata a particolari situazioni. In ogni caso, è sempre bene consultare un medico.",
          image: null
        },
        "tracheite": {
          title: "Tracheite",
          description: "<h3><i>Trattamenti</i></h3> Il trattamento della tracheite dipende dal tipo di tracheite con cui si ha a che fare: <br><b>Con la tracheite batterica</b> si può agire con l’assunzione di <b>antibiotici</b> accompagnati da riposo assoluto per alcuni giorni, apporto costante di liquidi. Con la <b>tracheite virale</b> solitamente basta la somministrazione di <b>farmaci antivirali</b>. Con la <b>tracheite da allergeni</b> bisogna <b>individuare il suo fattore scatenante e rimuoverlo dall’ambiente</b>, per poi procedere con <b>antistaminici e/o cortisoni</b> per ridurre la reazione allergica.\
          <br><br><h3><i>Prevenzione</i></h3>Per evitare l'insorgenza della tracheite è utile:<br>\
          <ul>\
              <li><b>Evitare il contatto diretto o indiretto con persone con un'infezione</b> delle vie respiratorie (es: Streptococcus pneumoniae, Staphylococcus aureus ecc.);</li>\
              <li><b>Evitare di inspirare aria altamente inquinata</b>;</li>\
              <li><b>Usare protezioni in caso di lavori in cui si respirano quotidianamente sostanze irritanti per le vie aeree</b>;</li>\
              <li><b>Evitare di fumare</b>;</li>\
              <li><b>Stare particolarmente attenti se affetti da immunodepressione</b> (dovuto, per esempio, all'AIDS, all'uso di farmaci immunosoppressori o al diabete).</li>\
          </ul>",
          image: null
        },
        "asma": {
          title: "Asma",
          description: "<h3><i>Trattamenti</i></h3> Poiché si tratta di una malattia soggetta a <b>fasi asintomatiche alternate a ricadute</b>, talora gravi, la terapia si basa sull'utilizzo di <b>farmaci anti-asmatici “di fondo”</b>, da assumere continuamente per <b>mantenere la malattia sotto controllo</b>, utilizzando <b>inalatori e particolari farmaci solo in caso di necessità</b>.\
          <br><br><h3><i>Prevenzione</i></h3> Poiché è una malattia in parte <b>ereditaria</b> (la componente ereditaria incide approssimativamente per il 30-60%) non esiste un vero e proprio metodo per evitare di contrarla. <br>Quando si soffre di asma, per prevenire una crisi non vanno mai dimenticate alcune semplici norme igieniche e comportamentali. \
          <br>Più in generale ogni asmatico dovrebbe stare <b>quanto più lontano da quelle sostanze irritanti o da quelli allergeni che scatenano la crisi</b> (fumo, vernici fresche, pelo di animali, pollini, sostanze con odore pungente ecc.).",
          image: null
        },
        "ictus": {
          title: "Ictus",
          description: "<h3><i>Rimedi</i></h3> L'ictus è una condizione che necessita di <b>cure ospedaliere immediate</b>, pertanto, la prima cosa da fare è contattare il 118 o recarsi al più vicino ospedale. Qui i medici cercheranno di definire il <b>tipo di ictus, l'area di cervello coinvolta</b> e la gravità della condizione e di pianificare il trattamento. L'ictus ischemico necessita di cure mirate a ripristinare il flusso sanguigno, mentre l'ictus emorragico di trattamenti finalizzati a bloccare l'emorragia cerebrale e ridurre la pressione esercitata sul tessuto cerebrale dal sangue in fuoriuscita.\
          <br><br><h3><i>Prevenzione</i></h3>Quando si parla di prevenzione dell'ictus ci si riferisce non solo al momento precedente la comparsa del disturbo (prevenzione primaria e secondaria), ma anche a situazioni successive, in cui la patologia ha già fatto la sua comparsa (prevenzione terziaria). Consigli di prevenzione sono:\
          <ul>\
              <li>controllare la pressione periodicamente e mantenerla a livelli adeguati;</li>\
              <li>non fumare, evitare di bere alcolici o non eccedere con le quantità e non far uso di droghe;</li>\
              <li>seguire una dieta sana ed equilibrata, ricca di frutta e verdura, in maniera tale da mantenere adeguati i livelli di colesterolo e diabete;</li>\
              <li>fare attività fisica, così da perdere peso eccessivo.</li>\
              </ul> ",
          image: null
        },
        "infarto": {
          title: "Infarto",
          description: "<h3><i>Rimedi</i></h3> Il trattamento di un infarto ha l'obiettivo di <b>riaprire</b> la coronaria occlusa. Un primo metodo, prevede disostruire la coronaria e riuscire a mantenerla aperta utilizzando un <b>catetere</b>, nel caso non sia possibile raggiungere le coronarie interessate è necessario utilizzare <b>farmaci</b> per disostruire l'occlusione. Un altro metodo è ricorrere all'intervento di <b>bypass coronarico</b>, che consiste nel creare chirurgicamente una canale di comunicazione fra l'aorta e la coronaria.  \
          <br><br><h3><i>Prevenzione</i></h3> Consigli di prevenzione, capaci di contribuire enormemente, sono: \
          <ul>\
              <li>praticare attività fisica regolare, riducendo il proprio peso corporeo, rientrando in un valore nella norma;</li>\
              <li>non fumare, evitare di bere alcolici o non eccedere con le quantità e non far uso di droghe;</li>\
              <li>seguire una dieta sana ed equilibrata, evitando cibi grassi, eccessivamente conditi o fritti, privilegiare i grassi vegetali e i pasti a base di verdure, fibre, carni magre e pesce;</li>\
              <li>limitare le situazioni che possono essere fonte di stress.</li>\
              </ul>",
          image: null
        },
        "aritmia": {
          title: "Aritmia",
          description: "<h3><i>Rimedi</i></h3> La maggior parte delle aritmie <b>non necessita trattamento</b>. <b>La terapia</b>, nei casi in cui serve, è innanzitutto <b>legata alla correzione della malattia cardiaca</b> di base o non cardiaca, e deve essere personalizzata in base ai sintomi, ai disturbi e al rischio specifico. Una terapia specifica, come per esempio l’applicazione di pacemaker (cioè una batteria artificiale impiantata sottocute), può essere indicata in caso di bradi-aritmia significativa. Una terapia farmacologica anti-aritmica oppure un defibrillatore cardiaco (una batteria che eroga shock elettrici) sono indicati in alcune tachiaritmie ventricolari minacciose. \
          <br><br><h3><i>Prevenzione</i></h3> La prevenzione delle aritmie, laddove possibile, è diversa a seconda della causa scatenante. In linea di massima, chi ha avuto ad esempio episodi di tachicardia ed extrasistolia, dovrebbe stare attento a: \
          <ul>\
              <li>sforzi fisici intensi;</li>\
              <li>stress o ansia;</li>\
              <li>abuso di nicotina;</li>\
              <li>sostanze eccitanti.</li>\
          </ul> \
          <br>In presenza di malattie correlate che possono favorire l’insorgenza di aritmie, la prevenzione prevede la cura di tali malattie. ",
          image: null
        },
        "angina pectoris": {
          title: "Angina pectoris",
          description: "<h3><i>Rimedi</i></h3> Il trattamento dell'angina è diretto a <b>migliorare la perfusione delle coronarie e a evitare il rischio di infarto e trombosi</b>. La terapia include diverse opzioni, <b>farmacologiche o interventistiche</b>, che vengono valutate dal cardiologo in relazione al quadro clinico. \
          <br><br><h3><i>Prevenzione</i></h3> La prevenzione dell’angina pectoris si attua in primo luogo attraverso la prevenzione dell’aterosclerosi coronarica (ostruzione delle vie arteriose), mettendo in atto tutte le misure volte a controllare i principali fattori di rischio cardiovascolare. È consigliato: \
          <ul>\
              <li>effettuare attività fisica regolare e seguire una dieta sana;</li>\
              <li>evitare, se si sono avuti episodi di dolore anginoso, sforzi eccessivi e fonti di stress psicofisico;</li>\
              <li>non fumare o smettere di fumare;</li>\
              <li>evitare pasti abbondanti e l'assunzione di alcolici.</li>\
          </ul> ",
          image: null
        },
        "trombosi": {
          title: "Trombosi",
          description: "<h3><i>Rimedi</i></h3> Il trattamento per la trombosi prevede l’utilizzo di <b>farmaci anticoagulanti</b>, in grado di inibire la coagulazione del sangue provocata dalla patologia. \
          <br><br><h3><i>Prevenzione</i></h3>Anche in caso di predisposizione alla trombosi, la prevenzione passa per lo stile di vita: ruolo di primissimo piano ha infatti l’attività fisica, poiché sovrappeso corporeo e obesità, causati spesso da uno stile di vita sedentario, sono importanti fattori di rischio aggiuntivi. Le donne con predisposizione genetica alla trombosi venosa, inoltre, dovrebbero evitare l’utilizzo di estro-progestinici (combinazione di due ormoni: un estrogeno ed un progestinico) a scopo anticoncezionale o sostitutivo dopo la menopausa, oppure utilizzarli solo a seguito di un’approfondita valutazione con uno specialista in emostasi e trombosi. \
          ",
          image: null
        },
        "occhi arrossati": {
          title: "Occhi arrossati",
          description: "<h3><i>Rimedi</i></h3>Il trattamento degli occhi arrossati dipende dalla causa e dal grado del rossore. Nel caso del <b>rossore causato dalla mancanza di sonno</b>, <b>dal lavoro al PC o dall'eccessiva assunzione di alcool</b>, in genere è sufficiente il <b>riposo</b>. <br> \
          I <b>colliri, gli spray o gli unguenti</b> oftalmici che hanno un effetto calmante sull'occhio possono essere utilizzati come <b>sostituti delle lacrime</b>.<br>\
          Gli occhi rossi che necessitano di trattamento sono quelli provocati da <b>infiammazioni, allergie o infezioni</b>. In questi casi, bisogna utilizzare <b>colliri antistaminici o cortisonici</b> e consultare un oculista.<br><br>\
          Importante è non scegliere autonomamente il collirio da utilizzare, ma farsi visitare da un oculista per un consiglio medico professionale.\
          <br><br><h3><i>Prevenzione</i></h3>Consigli di prevenzione sono:<ul><li>Fare <b>pause regolari</b>, in caso di utilizzo prolungato di dispositivi, quali computer;</li><li>Assicurare di <b>riposare</b> per un adeguato numero di ore;</li><li><b>Evitare di toccare</b> la parte interessata con mani non igienizzate;</li><li>Idratarsi;</li><li>Fare attenzione all’utilizzo di lenti a contatto o cosmetici;</li></ul>",
          image: null
        },
        "secchezza oculare": {
          title: "Secchezza oculare",
          description: "<h3><i>Rimedi</i></h3>Nonostante l’ambiente circostante non aiuti a prevenire la sindrome dell’occhio secco, ci sono molti rimedi e accorgimenti che si possono adottare per difendersi dall’insorgenza di questo disturbo, a meno che non si tratti di una vera e propria patologia.<br><br>\
          Innanzitutto, abituiamoci a rispettare alcune buone abitudini per uno stile di vita sano:<ul><li><b>Bere</b> almeno due litri di acqua al giorno;</li><li>Praticare una <b>corretta alimentazione</b>;</li><li><b>Dormire</b> almeno 8 ore per notte;</li><li><b>Evitare l'uso eccessivo di display e monitor</b>;</li></ul>\
          <br><br><h3><i>Prevenzione</i></h3>Consigli di prevenzione sono invece:<ul><li><b>Indossare un paio di occhiali da sole</b> per ripararsi dai raggi UV e dal vento;</li><li>Usare <b>lacrime artificiali</b>, disponibili in gocce o unguenti;</li><li>Cercare di <b>sbattere le palpebre più spesso</b>;</li><li><b>Non fumare</b>;</li></ul><br>\
          Questi piccoli accorgimenti ci aiuteranno a prevenire l'insorgere di disturbi agli occhi.",
          image: null

        },
        "astigmatismo": {
          title: "Astigmatismo",
          description: "<h3><i>Rimedi</i></h3>La correzione dell'astigmatismo si attua mediante l'uso di <b>lenti cilindriche chiamate toriche</b>, sia sotto forma di occhiali da vista che di lenti a contatto, e che hanno la capacità di modificare il potere di uno solo dei meridiani, quello patologico, lasciando intatti tutti gli altri. <br><br>\
          È possibile anche il <b>trattamento chirurgico mediante laser</b>, naturalmente, previo consulto col medico specialista. Per l'astigmatismo grave, si può ricorrere all'impianto di <b>lenti intraoculari toriche</b>.\
          <br><br><h3><i>Prevenzione</i></h3>Per prevenire l'astigmatismo è bene effettuare visite oculistiche sin dai 4 o 5 anni, invece in caso di familiarità con malattie oculari anche ad un’età inferiore.\
          Questi piccoli accorgimenti ci aiuteranno a prevenire l'insorgere di disturbi agli occhi.",
          image: null
        },
        "congiuntivite": {
          title: "Congiuntivite",
          description: "<h3><i>Rimedi</i></h3>La cura della congiuntivite varia a seconda del <b>tipo di infiammazione e delle cause che l'hanno provocata</b>. In caso di:<ul><li>Congiuntivite infettiva non sono necessarie cure mediche e generalmente il problema si risolve in una o due settimane. Se i fastidi persistono è <b>consigliabile</b> identificare la causa e prescrivere un’adeguata terapia consultando uno specialista;</li><li>Congiuntive allergica possono essere prescritti dal medico antistaminici, stabilizzatori dei mastociti, corticosteroidi (da utilizzare comunque con cautela), decongestionanti o antinfiammatori;</li><li>Congiuntivite gigantopapillare (da contatto), se il problema nasce dal contatto di lenti, sostanze irritanti o è provocata da agenti fisici esterni, è necessario individuare la causa ed evitarne l’utilizzo o il contatto.</li></ul>\
          <br><br><h3><i>Prevenzione</i></h3>I consigli di prevenzione <b>variano a seconda della tipologia</b> di congiuntivite:<ul><li>Lavare spesso le mani con acqua e sapone;</li><li>Evitare di <b>toccare o strofinare</b> l’occhio sano dopo aver toccato l’occhio infetto;</li><li>Gettare nella spazzatura i cosmetici per il make-up utilizzati nei primi stadi dell'infezione per evitare che questa si manifesti nuovamente. Soprattutto, <b>evitare accuratamente</b> di usare su entrambi gli occhi i cosmetici utilizzati per un occhio irritato;</li><li>Evitare di entrare in contatto con gli elementi fonte di allergia (tenere le finestre chiuse, viaggiare con finestrini chiusi, ecc);</li><li>Indossare occhiali da sole o protettivi da lavoro;</li><li>Evitare il contatto con sostanze irritanti o di soggiornare a lungo in ambienti dove queste sostanze sono conservate senza adeguata areazione (ad esempio magazzini, cantine);</li><li>Evitare ambienti fumosi o polverosi;</li></ul>",
          image: null
        },
        "cataratta": {
          title: "Cataratta",
          description: "<h3><i>Rimedi</i></h3>L’unico trattamento attualmente disponibile è <b>l’intervento chirurgico</b>. Il momento in cui intervenire è in rapporto al grado di evoluzione della cataratta e al disagio visivo che essa comporta nelle attività quotidiane più comuni. Pertanto è una decisione che <b>coinvolge sia il medico sia il paziente</b>. <br><br>\
          <br><br><h3><i>Prevenzione</i></h3>Per prevenire la cataratta sono importanti <b>un’alimentazione ricca di cibi contenenti antiossidanti</b> naturali (come frutta e verdura), l’uso di occhiali da sole, il controllo dei livelli di zuccheri nel sangue e l’astensione dal fumo.",
          image: null
        },
        "aids": {
          title: "AIDS",
          description: "<h3><i>Rimedi</i></h3><b>Al momento, non esiste purtroppo una cura o un vaccino per eliminare definitivamente l'HIV dal corpo</b>. Tuttavia, la diagnosi e le terapie tempestive possono ritardare moltissimo o addirittura impedire la comparsa dell'AIDS.\
          <br><br><h3><i>Prevenzione</i></h3>Consigli principali per prevenire il rischio di trasmissione dell’HIV sono: \
          <ul>\
              <li><b>utilizzare, maniera corretta, il profilattico nei rapporti</b>;</li>\
              <li>assumere correttamente la profilassi pre-esposizione (PrEP), la quale consiste nell’assumere una combinazione di farmaci attivi contro l'HIV prima dei rapporti sessuali. Correttamente assunta da persone sieronegative a rischio di infezione, la PrEP si è dimostrata efficace nel prevenire l’acquisizione dell’infezione da HIV;</li>\
              <li>effettuare terapia anti-retrovirale.</li>\
          </ul>",
          image: null
        },
        "infezioni urinarie": {
          title: "Infezioni urinarie",
          description: "<h3><i>Rimedi</i></h3> La cura delle infezioni urinarie si differenzia in base alla loro causa di origine. Se i sintomi sono legati a un'infezione non associata ad alcuna patologia, la terapia è fondata, esclusivamente, sulla <b>somministrazione di antibiotici</b>. Al contrario, quando l'infezione è determinata, per esempio, da calcoli renali o dall'ipertrofia prostatica benigna, la terapia <b>deve comprendere non solo un trattamento antibiotico, ma anche un trattamento specifico nei confronti della condizione patologica associata</b>.\
          <br><br><h3><i>Prevenzione</i></h3>Alcuni dei principali consigli medici, per prevenire le infezioni urinarie, consistono nel: \
          <ul>\
              <li>svuotare la vescica completamente, specie dopo i rapporti sessuali;</li>\
              <li>adottare una dieta ricca di fibre e povera di grassi e proteine animali, assumendo molta acqua;</li>\
              <li>provvedere all'igiene intima;</li>\
              <li>evitare prodotti intimi potenzialmente irritanti e prediligere la biancheria intima di cotone.</li>\
          </ul>",
          image: null
        },
        "malattia infiammatoria pelvica": {
          title: "Malattia infiammatoria pelvica",
          description: "<h3><i>Rimedi</i></h3>Il trattamento della malattia infiammatoria pelvica prevedere l'<b>uso di antibiotici</b>, inoltre, la terapia <b>può coinvolgere anche il partner</b> al fine di evitare ulteriori infezioni. Per lo stesso motivo, nel corso della terapia antibiotica è consigliabile <b>astenersi dai rapporti sessuali</b>. In alcuni casi è necessario il ricovero ospedaliero e la somministrazione di <b>terapia antibiotica per via endovenosa</b>. <b>Raramente</b> si rende necessario <b>l'intervento chirurgico<b/>. \
          <br><br><h3><i>Prevenzione</i></h3>La maniera più efficace per prevenire la malattia infiammatoria pelvica è l'utilizzo del preservativo nel corso dei rapporti sessuali.",
          image: null
        },
        "insufficienza renale": {
          title: "Insufficienza renale",
          description: "<h3><i>Rimedi</i></h3> In genere, il trattamento dell'insufficienza renale <b>prevede una terapia mirata alla cura delle cause</b> (terapia causale), <b>una terapia focalizzata al miglioramento del quadro sintomatologico e delle complicazioni</b> (terapia sintomatica), <b>la dialisi e l'adozione di uno stile di vita adeguato</b> alle circostanze in atto. Analizzando più nei dettagli le due tipologie di insufficienza renale, è opportuno precisare che:\
          <ul>\
              <li><b>l'insufficienza renale acuta</b> richiede, di norma, il ricovero ospedaliero del paziente, fino alla ripresa della funzionalità renale. È molto rara una dimissione anticipata;</li>\
              <li><b>l'insufficienza renale cronica</b> è trattabile anche da casa e rientra tra le condizioni per le quali risulta indicato il trapianto di rene.</li>\
          </ul> \
          <br><h3><i>Prevenzione</i></h3>Consigli di prevenzione sono: \
          <ul>\
              <li>seguire una dieta sana e povera di sale;</li>\
              <li>non eccedere nell'uso di farmaci che potrebbero danneggiare i reni;</li>\
              <li>non fumare e/o evitare o limitare il consumo di alcolici;</li>\
              <li>praticare esercizio fisico con regolarità.</li>\
          </ul> \
          Curare fin da subito anche il meno preoccupante dei problemi renali sono i principali accorgimenti preventivi contro l'insufficienza renale.",
          image: null
        },
        "calcoli renali": {
          title: "Calcoli renali",
          description: "<h3><i>Rimedi</i></h3> Nel caso i calcoli sono di <b>dimensioni contenute</b> il medico può prescrivere <b>farmaci antidolorifici</b>. Se compaiono nausea e vomito, è possibile prendere <b>farmaci specifici per alleviarli (antiemetici)</b>. <b>Gli antibiotici</b>, invece, sono prescritti <b>in caso di infezione delle vie urinarie</b>. Il medico potrà essere consigliato nel caso di preesistente malattia renale, dolore che non migliora dopo un'ora dall'impiego di farmaci antidolorifici e antiemetici, disidratazione e presenza di vomito violento e gravidanza. <b>Se i calcoli sono troppo grandi</b> da poter essere espulsi naturalmente (6-7 mm di diametro), <b>si può intervenire utilizzando onde d'urto o attraverso incisione e successiva esportazione dei calcoli</b>.  \
          <br><br><h3><i>Prevenzione</i></h3> Il miglior modo per prevenire i calcoli renali è bere 2-3 litri di acqua al giorno, così che le urine siano più diluite ed evitando che i prodotti di scarto diventino troppo concentrati. Un altro consiglio è quello di ridurre particolari alimenti nella propria dieta, a seconda del calcolo. Possono anche essere utilizzati dei farmaci adatti prescritti dal medico.",
          image: null
        }
      }
    },
    "pelle": {
      title: "Pelle",
      description: "La pelle è l’organo del corpo umano più esteso. Ci protegge giornalmente da ogni genere di <b>attacco esterno</b> ed è incredibilmente elastica. Grazie ad essa, siamo dotati del senso del <b>tatto</b>, siamo sensibili al <b>caldo</b> e al <b>freddo</b> e riusciamo a percepire ciò che i nostri occhi non possono vedere, come ad esempio <b>l'aria</b>. <br><br>La pelle è costituita da diversi strati ed, per preservare questa barriera naturale, <b>è importante mantenere quanto più possibile inalterato l'equilibrio acido:</b> ciò è agevolato effettuando una <b>detersione adeguata</b> e un’idratazione della pelle, possibilmente giornaliera. Dunque, per mantenere la pelle in buona salute è necessario eseguire quotidianamente una <b>regolare detersione.</b>",
      image: 'pelle',
      next: "occhi",
      prev: "pelvica",
      move: true,
      topics: {
        "acne": {
          title: "Acne",
          description: "L'acne è un'<b>infiammazione dei follicoli pilosebacei</b> che si manifesta principalmente con la comparsa del <b>brufolo</b>. Prima si formano i comedoni (i punti neri) poi si formano le papule o pustole (brufoli) e, nei casi più gravi, è possibile che evolva in noduli o cisti. <br><br>L'acne si distingue principalmente in acne giovanile o adolescenziale e in acne tarda o tardiva, cioè post-adolescenziale o dell'adulto.\
          <br><br><h3><i>Cause</i></h3>La comparsa degli ormoni nel periodo dell'adolescenza causa l'aumento di volume delle ghiandole sebacee e l'inizio della produzione del sebo. Il sebo è una secrezione oleosa, che serve a proteggere la cute dalle infezioni. In alcuni soggetti maggiormente predisposti, il sebo svolge un'azione irritante e induce la formazione del comedone o punto nero. <br><br>Un’alimentazione troppo calorica può far peggiorare un'acne già in atto, oltre a far aumentare il peso. Un altro comportamento sbagliato è quello di lavarsi frequentemente e con molto sapone, in questo modo la secrezione di sebo e l’irritazione aumentano, peggiorando quindi l’acne. Infine, lo schiacciamento dei punti neri o dei foruncoli provoca una diffusione dell'infiammazione, aumentando la possibilità di formazione di cicatrici.\
          <br><br><h3><i>Sintomi</i></h3>Formazione di comedoni o punti neri, di foruncoli, di cisti e di noduli su: viso, collo, petto e schiena. Solitamente non si verifica in maniera grave ma, nei casi più seri, per evitare la formazione di cicatrici e segni permanenti è opportuno rivolgersi ad un dermatologo.",
          image: 'acne'
        },
        "dermatite": {
          title: "Dermatite",
          description: "La dermatite consiste in una <b>reazione della pelle a fattori esterni</b> (allergeni, chimici, fisici) <b>o interni</b> (liberazione dei fattori dell’infiammazione). È caratterizzata da un'infiammazione improvvisa della cute che diventa rossa e pruriginosa.\
          <br><br><h3><i>Cause</i></h3>La dermatite presenta diverse cause, che possono essere esterne o interne e, sono presenti diverse tipologie di dermatite. In questo corso la dermatite viene trattata solo in maniere generale.\
          <br><br><h3><i>Sintomi</i></h3>I sintomi della dermatite variano in base all'origine. Generalmente, si presenta come una <b>manifestazione cutanea improvvisa caratterizzata da rossore, desquamazione, vescicole, bolle, erosioni</b> e <b>crosticine</b>. L'eruzione cutanea può essere più o meno fastidiosa e causare prurito, spingendo la persona a grattarsi. Questa situazione può comportare lacerazioni e ferite e un rischio indiretto di infezione.",
          image: 'dermatite'
        },
        "verruca": {
          title: "Verruca",
          description: "Le verruche sono lesioni epidermiche, benigne, molto frequenti, causate dall'infezione da papilloma virus umano e possono comparire su qualunque parte del corpo.\
          <br><br><h3><i>Cause</i></h3>Fra i principali fattori di rischio che possono provocare e favorire la comparsa delle verruche, ritroviamo:\
          <ul><li><b>Indebolimento delle difese immunitarie</b> (stress, cattiva alimentazione e patologie debilitanti);\
              <li><b>Fattori genetici</b>;</li>\
              <li><b>Lesioni cutanee</b> (fattore di maggiore rischio);</li>\
              <li><b>Accumulo di umidità</b> (utilizzo di calze o scarpe bagnate);</li>\
              <li><b>Calzature e calze inadeguate</b> (fabbricate con materiali sintetici non traspiranti);</li>\
              <li><b>Camminare scalzi negli spogliatoi o nei bagni pubblici.</b></li>\
          </ul>\
          Infine, anche la <b>scarsa igiene cutanea</b>, l'eccessiva esposizione alla luce solare (comprese le lampade abbronzanti) facilitano l'insorgenza delle verruche.\
          <br><br><h3><i>Sintomi</i></h3>Generalmente queste infezioni si presentano come piccole escrescenze caratterizzate da superficie irregolare e ruvida al tatto, grandezza variabile e forma rotondeggiante. Appaiono principalmente sul dorso delle mani e delle dita e nel contorno ungueale. Possono provocare dolore se sottoposte a pressione.",
          image: "verruca"
        },
        "lipoma": {
          title: "Lipoma (tumore benigno)",
          description: "Il lipoma è un tumore benigno del tessuto adiposo causato dall'eccessivo sviluppo delle cellule di grasso (cellule adipose). I lipomi si presentano come accumuli di grasso sottocutaneo. Generalmente, le dimensioni variano da uno a cinque centimetri di diametro ma, in alcuni casi, possono arrivare a 15 cm. Sono di consistenza molle, non dolorosi, mobili al tatto e quindi facili da identificare.\
          <br><br><h3><i>Cause</i></h3>Tutt'oggi non sono del tutto note le cause che portano alla formazione dei lipomi.\
          <br><br><h3><i>Sintomi</i></h3>Generalmente, i lipomi non causano disturbi (sintomi) per tutta la vita, tuttavia a causa della loro posizione, possono essere fastidiosi.",
          image: 'lipoma'
        }
      }
    },
    "occhi": {
      title: "Occhi",
      description: "Molto spesso la salute oculare viene trascurata, nonostante gli occhi siano un <b>ambiente ad alto rischio</b> di infezioni ed infiammazioni a causa di diversi fattori riguardanti gli occhi stessi, le ciglia e il margine delle palpebre.<br><br>\
                    Inoltre, la <b>superficie oculare</b> per via della sua posizione, circondata da naso, guance e sopracciglia, <b>non è facilmente accessibile</b> alla pulizia quotidiana come invece le zone circostanti.<br>\
                    <br> Bisogna inoltre effettuare controlli e seguire dei comportamenti sani, così da prevenire problematiche o ridurre infezioni, malattie e patologie relativi agli occhi. Ecco alcune problematiche tra le più diffuse:",
      image: 'Occhio',
      next: "orecchie",
      prev: "pelle",
      move: true,
      topics: {
        "occhi arrossati": {
          title: "Occhi arrossati",
          description: "L'arrossamento degli occhi si verifica quando le <b>vene</b> presenti nell'occhio <b>si gonfiano di sangue o si rompono</b>, provocando l'arrossamento del bulbo oculare. Questo processo non è solo fastidioso, ma può anche conferire un <b>aspetto stanco e malato</b>.<br>\
                        Nella maggior parte dei casi, tuttavia, il sanguinamento dell'occhio è <b>innocuo</b> e può essere curato rapidamente, se invece persiste per un <b>lungo</b> periodo non va assolutamente trascurato, in tal caso è necessario consultare un <b>oculista</b>, poiché potrebbe essere il segnale di un'infiammazione o di un'infezione in corso.\
                        <br><br><h3><i>Cause</i></h3>Gli <b>occhi arrossati</b> possono avere molteplici cause, ma bisogna distinguere tra quelle <b>interne ed esterne</b>. Le cause possono riguardare:\
                        <br>Aria secca e climatizzata, mancanza di sonno, cloro della piscina, cosmetici, lunghi periodi di lavoro al computer, consumo di alcool e uso di lenti a contatto;\
                        <br><br><h3><i>Sintomi</i></h3><b>Altri fattori</b> di causa potrebbero riguardare eventuali <b>infezioni, infiammazioni o allergie</b>. I sintomi degli occhi arrossati comprendono:\
                        <ul><li>Occhi rossi e irritati;</li><li>Lacrimazione eccessiva;</li><li>Sensibilità alla luce;</li><li>Alterazioni anomale alla vista</li><li>Pesantezza della palpebra;</li><li>Affaticamento oculare;</li><li>Secrezione di liquido appiccicoso;</li><li>Rossore oculare;</li><li>Occhi dolenti;</li><li>Macchia bianca sulla cornea</li></ul>\
                        ",
          image: "Occhio arrossato"
        },
        "secchezza oculare": {
          title: "Secchezza oculare",
          description: "La secchezza oculare si verifica quando gli <b>occhi non producono abbastanza fluido lacrimale</b>, quando la qualità del fluido prodotto non è ottimale o quando il liquido lacrimale evapora troppo velocemente, di conseguenza, possiamo ritrovarci con gli <b>occhi secchi e che prudono</b>, con una conseguente irritazione.<br>\
          Gli occhi secchi in genere sono <b>innocui</b>, anche se possono portare ad un aumento di sensibilità e bruciore agli occhi. Se si sospetta <b>un'infiammazione o infezione</b>, il trattamento dipende dalla causa, dall'area dell'occhio soggetta a infezione e dalla gravità di quest'ultima.<br>\
          Se hai la vista appannata o fastidio agli occhi, dovresti visitare un <b>oculista</b>, poiché potresti avere bisogno di gocce per gli occhi contenenti antibiotici.\
          <br><br><h3><i>Cause</i></h3>L’occhio secco può dipendere da molti fattori, che possono essere di ordine fisiologico “naturale”, come <b>l’invecchiamento</b>, ma può generarsi anche per motivi diversi.<br><br>\
          Disfunzioni metaboliche e ormonali, stress, alimentazione e stili di vita sregolati (soprattutto dormire poco), una prolungata esposizione a display e monitor (tv, smartphone, tablet o computer), sono tutti <b>fattori</b> fisiologici legati a uno <b>“squilibrio”</b>, che può dipendere da una patologia, oppure da un nostro comportamento sbagliato, che causa affaticamento visivo.<br>\
          Tra le molte cause che scatenano la sindrome dell’occhio secco, vi sono anche i <b>fattori ambientali</b>, come il caldo e la siccità che aumentano l’insorgenza dell’infiammazione delle mucose, causa della secchezza oculare.\
          <br><br><h3><i>Sintomi</i></h3>Gli occhi secchi possono portare diversi <b>sintomi</b>, i quali includono:\
          <ul><li>La sensazione di bruciore, secchezza, fastidio e prurito;</li><li>Momenti brevi o intermittenti di vista annebbiata;</li><li>Fastidio davanti a luci forti;</li><li>Occhio arrossato;</li><li>Occhi lacrimosi;</li><li>Coloro che utilizzano lenti a contatto potrebbero sentire che le lenti diventano meno piacevoli da indossare;</li><li>Vista offuscata per brevi periodi o temporanea;</li><li>Fotosensibilità;</li>",
          image: "Secchezza_oculare"
        },
        "astigmatismo": {
          title: "Astigmatismo",
          description: "L' astigmatismo è un <b>difetto dell'occhio</b> molto comune e, generalmente, facilmente <b>curabile</b> che dipende dalla forma della cornea, la quale invece di essere simile a quella di un pallone da calcio, è più simile a quella di un pallone da rugby e quindi la curvatura non è la medesima sui diversi meridiani.<br>\
          I raggi di luce non vengono messi a fuoco tutti nello stesso punto, questo accade perché l'occhio non ha lo stesso potere di messa a fuoco lungo tutti i meridiani della cornea, provocando nei casi più lievi una <b>minore nitidezza delle immagini</b>. L'astigmatismo <b>peggiora la vista sia da lontano che da vicino</b> e non ha rapporti con l'età del paziente come la presbiopia.\
          <br><br><h3><i>Cause</i></h3>A causare l'astigmatismo può essere <b>un'alterazione della curvatura della cornea</b> che, anziché avere una forma normalmente sferica ha un <b>profilo ellissoidale</b>. In questo caso i raggi di luce provenienti dagli oggetti vengono proiettati in maniera disuguale nei vari punti della retina. L'occhio astigmatico vede male sia da lontano sia da vicino, gli oggetti possono apparire <b>sfocati ma anche sdoppiati</b>.\
          <br><br><h3><i>Sintomi</i></h3>I <b>sintomi</b> dell'astigmatismo consistono in un calo della vista sia da lontano che da vicino. In particolare, a risentirne è la nitidezza visiva: i soggetti astigmatici sperimentano, infatti, un fastidioso offuscamento di ciò che si osserva.",
          image: "Astigmatismo"
        },
        "congiuntivite": {
          title: "Congiuntivite",
          description: "La congiuntivite è <b>un'infiammazione</b> del sottile strato di tessuto, chiamato appunto <b>congiuntiva</b>, che copre la superficie interna delle palpebre e quella anteriore del bulbo oculare. <br>La congiuntiva viene lubrificata dalla secrezione emessa dalle ghiandole lacrimali e ha la funzione di difendere l'occhio dai microrganismi e di proteggerlo da sostanze ed oggetti estranei.<br>\
          La congiuntivite è una delle malattie oculari più <b>comuni</b> e può manifestarsi in forma acuta o cronica. Può colpire <b>un solo occhio</b> e poi estendersi ad <b>entrambi</b>. Può infatti essere causata da un'infezione batterica, virale o da altri microorganismi o parassiti <b>(congiuntivite infettiva)</b>.\
          Può anche derivare da una <b>reazione allergica</b> a elementi come pollini, acari della polvere, peli di animali, farmaci (congiuntivite allergica) o dal contatto con sostanze chimiche quali saponi, cosmetici, acidi, alcali, e anche da agenti fisici di varia natura, tra cui l'esposizione eccessiva ai raggi solari e ad altre radiazioni (congiuntivite da agenti chimici e fisici).\
          <br><br><h3><i>Cause</i></h3>Le <b>cause</b> più comuni sono:\
          <ul><li><b>Infezione</b> (congiuntivite infettiva), provocata da batteri, da virus o da infezioni sessualmente trasmissibili;</li><li><b>Reazione allergica</b> (congiuntivite allergica), provocate da elementi come pollini, acari della polvere, peli di animali, farmaci, prodotti o sostanze come colliri e cosmetici o polveri, dall'utilizzo di lenti a contatto o dalla presenza di corpi estranei, protesi oculari, suture congiuntivali o corneali. Inoltre, questi tipi di congiuntivite colpiscono più comunemente le persone che già soffrono di altre forme allergiche, incluse quelle alimentari;</li><li><b>Contatto con sostanze chimiche irritanti</b> o agenti fisici di varia natura, come saponi, cloro presente nelle piscine, fumo, eccessiva esposizione ai raggi del sole o a forti correnti d’aria.</ul>\
          <br><h3><i>Sintomi</i></h3>I <b>sintomi</b> provocati dalla congiuntivite <b>variano</b> in base alle cause che hanno determinato l'infiammazione. Includono:\
          <ul><li>Arrossamento degli occhi (iperemia);</li><li>Aumento della secrezione lacrimale;</li><li>Sensazione di corpo estraneo negli occhi (come sabbia);</li><li>Gonfiore delle palpebre;</li><li>Sensibilità alla luce (fotofobia);</li><li>Secrezione purulenta (in particolare, nelle congiuntiviti infettive, al mattino l'occhio presenta una secrezione appiccicosa sulle ciglia, in genere di colore giallastro);</li><li>Prurito;</li><li>Dolore/fastidio agli occhi (se vi è un coinvolgimento della cornea);</li><li>Visione appannata o offuscata.</li></ul>",
          image: "Congiuntivite"
        },
        "cataratta": {
          title: "Cataratta",
          description: "La cataratta è <b>un’opacizzazione del cristallino</b>, la lente indispensabile per mettere a fuoco le immagini sulla retina che si trova dietro alla parte colorata dell’occhio, l’iride.<br><br>\
          È un problema tipicamente associato <b>all’invecchiamento</b>, che tende a insorgere dopo i 60 anni, ma che può colpire anche in giovane età e che può essere risolto con un <b>intervento chirurgico</b>.\
          <br><br><h3><i>Cause</i></h3>In genere l’opacizzazione è causata dall’aggregazione e dall’ossidazione delle <b>proteine del cristallino</b>, un processo noto e diffuso in tutto l’organismo che progredisce con l’invecchiamento.Per questo motivo il <b>90%</b> degli individui di età superiore ai 75 anni soffre di cataratta. Altre possibili cause sono l’esposizione prolungata ai raggi ultravioletti, il diabete e il fumo.\
          <br><h3><i>Sintomi</i></h3>Il sintomo principale è <b>l’annebbiamento progressivo</b>, a volte con abbagliamento alla luce frontale, sdoppiamento delle immagini e talvolta un iniziale curioso miglioramento della vista. Pertanto è consigliata una <b>visita oculistica periodica</b> oltre i 60 anni di età, anche in assenza di sintomatologia specifica.",
          image: "Cataratta"
        },
      }
    },
    "orecchie": {
      title: "Orecchie",
      description: "L'orecchio è un organo complesso che ha una duplice funzione:\
                      <ol><li>Permette la percezione dei suoni (udito);</li>\
                          <li>Fornisce informazioni circa la posizione del corpo nello spazio (equilibrio).</li>\
                      </ol>\
                      La corretta pulizia delle orecchie è indispensabile per minimizzare il rischio d'infezione. Le orecchie sono organi sensoriali estremamente fragili, di conseguenza richiedono una pulizia delicata ma allo stesso tempo adeguata ed efficace.",
      image: 'orecchie',
      next: "bocca",
      prev: "occhi",
      move: true,
      topics: {
        "otite": {
          title: "Otite",
          description: "L’otite è un’infezione dell’orecchio che può avere origine virale o batterica e decorso cronico o acuto. Spesso si verifica a seguito o in contemporanea a un raffreddore o a un’infezione alla gola.\
          <br><br><h3><i>Cause</i></h3>L'otite media è una comune complicanza di raffreddore, faringite, influenza ed allergie.\
          <br><br><h3><i>Sintomi</i></h3>Essendo causata da infezioni batteriche/virali, l'otite media è spesso accompagnata da dolore, prurito ed infiammazione locale (otite media acuta purulenta).",
          image: 'otite'
        },
        "acufene": {
          title: "Acufene (fischio alle orecchie)",
          description: "L'acufene è la percezione di un rumore, solitamente un ronzio, un fischio, un fruscio o un sibilo, avvertito nelle orecchie o nella testa in assenza di uno stimolo acustico esterno. Il suono può essere debole o forte, continuo o intermittente e, può essere percepito da un orecchio (acufene unilaterale) oppure da entrambe le orecchie (acufene bilaterale).\
          <br><br><h3><i>Cause</i></h3>Le cause che portano alla comparsa dell’acufene sono sconosciute nella maggior parte dei pazienti. Si ipotizza che il gruppo di cellule nervose o neuroni che regolano i segnali di rumore e di dolore possano alterarsi, sviluppando così una percezione cronica di queste sensazioni.\
          <br><br><h3><i>Sintomi</i></h3>L’acufene è solitamente un fenomeno soggettivo, cioè avvertito solo dall’interessato. In altri casi si può definire oggettivo, quando è udibile anche da altre persone oltre a colui che ne soffre.",
          image: 'acufene'
        },
        "parotite": {
          title: "Parotite (orecchioni)",
          description: "La parotite è una malattia virale che colpisce le ghiandole salivari poste dietro la mandibola e sotto le orecchie. È comunemente conosciuta con il termine «orecchioni», per la particolare forma che l‘ingrossamento delle ghiandole conferisce al volto.\
          <br><br><h3><i>Cause</i></h3>La parotite si trasmette soltanto da persona a persona ed è tipicamente diffusa fra i bambini (tra i 5 e i 9 anni), l’infezione può però colpire persone di qualunque età, e tra gli adulti si osservano con maggiore frequenza complicazioni, anche gravi.\
          <br><br><h3><i>Sintomi</i></h3>I sintomi iniziali della parotite comportano un malessere generale con: febbre, mal di testa, dolori muscolari, nausea e perdita dell'appetito. Successivamente, dopo 3-4 giorni, aumenta gradualmente il gonfiore di una o più ghiandole salivari.",
          image: 'parotite'
        },
        "labirintite": {
          title: "Labirintite (vertigini)",
          description: "La labirintite è una infiammazione dell’orecchio interno, più precisamente del labirinto, una struttura il cui buon funzionamento serve per il mantenimento della postura e del senso di equilibrio. Quando infatti questa parte si infiamma si manifesta, oltre che con una riduzione dell’udito, vertigini, disturbi dell’equilibrio e problemi della postura.\
          <br><br><h3><i>Cause</i></h3>Non è presente una causa ben precisa ma, si presume che la malattia sia il risultato finale di <b>insulti batterici</b> o <b>virali</b>.\
          <br><br><h3><i>Sintomi</i></h3>Fra i sintomi della labirintite più comuni ci sono: vertigini, stordimento, nausea, fischio alle orecchie (acufeni), febbre, dolore alle orecchie (otalgia), perdita dell’udito, perdita dell’equilibrio. \
          <br><br><h3><i>Conseguenze psicologiche</i></h3>Nella maggior parte dei casi, i pazienti affetti da labirintite sono ansiosi e spaventati dalla malattia, sentendosi incapaci di controllare sé stessi.",
          image: 'labirintite'
        }
      }
    },
    "bocca": {
      title: "Bocca",
      description: "La bocca è la cavità corrispondente all’inizio del <b>canale alimentare</b> ma è anche una delle due <b>vie respiratorie</b>. Essa è composta da diversi elementi come: il labbro superiore; la gengiva superiore; l’arcata dentaria superiore; il palato, che di distingue in palato duro, quello anteriore e palato molle, quello posteriore; l’ugola; due tonsille; la lingua; l’arcata dentaria inferiore; la gengiva inferiore; il labbro inferiore.",
      image: "bocca-bocca",
      next: "respiratorio",
      prev: "orecchie",
      move: true,
      topics: {
        "carie-dentale": {
          title: "Carie dentale",
          description: "La carie è <b>un'infezione dentale a decorso estremamente lento</b>, innescata dall'attacco di alcuni microorganismi che popolano il cavo orale.\
          <br><br><h3><i>Cause</i></h3>La carie presenta un'origine multifattoriale. Il processo infettivo è causato da <b>fattori esogeni</b> (deposito di placca, alimentazione scorretta, fumare tabacco) ed <b>endogeni</b> (riduzione della saliva, struttura dei denti).\
          <br><br><h3><i>Sintomi</i></h3>Il primo segnale che il nostro corpo ci invia è il <b>cambiamento di colore nello smalto</b>, che diventa opaco per poi trasformarsi in un <b>solco scuro</b>. Man mano che la carie evolve, i sintomi diventano: <b>Alito cattivo; Ipersensibilità a caldo, freddo, dolce, salato ed acido; Dolore al dente che s'irradia nei tessuti circostanti</b>.",
          image: "bocca-denti"
        },
        "gengivite": {
          title: "Gengivite",
          description: "La gengivite è <b>un processo infiammatorio a carico delle gengive</b>. Secondo l'Associazione Dentale Americana (American Dental Association), la gengivite è, assieme alla parodontite, la principale causa di perdita dei denti nelle persone adulte.\
          <br><br><h3><i>Cause</i></h3> Nella maggior parte dei casi, la gengivite è <b>una malattia batterica</b> (cioè dovuta all'azione di batteri) favorita dalla <b>scarsa igiene orale</b>: spesso, infatti, i responsabili del processo infiammatorio a carico delle gengive sono la <b>placca batterica</b> (o placca dentale) formatasi sui denti e non adeguatamente eliminata con lo spazzolino, e la sua successiva calcificazione in <b>tartaro</b>.\
          <br><br><h3><i>Sintomi</i></h3> Sono piuttosto frequenti sintomi come <b>alito cattivo, sanguinamento delle gengive mentre si spazzolano i denti</b> (o per altri stimoli modesti come la masticazione di cibi duri), <b>strano sapore in bocca</b> e <b>cambiamento di colore</b> (rossore), <b>consistenza</b> (molle) e/o <b>forma</b> (gonfiore) delle gengive. In uno stadio avanzato possono comparire spazi tra i denti, recessioni gengivali con esposizione delle radici e un'eccessiva mobilità dentale.\
          ",
          image: "bocca-gengive"
        },
        "parodontite": {
          title: "Parodontite",
          description: "La parodontite è <b>una malattia dentale di tipo batterico che sfocia in una infiammazione</b>. Nota anche come piorrea, è una patologia piuttosto subdola che - se non curata - porta alla distruzione dei tessuti che assicurano sostegno e stabilità ai denti.\
          <br><br><h3><i>Cause</i></h3> Le cause sono molteplici: <b>cattive condizioni di salute generale</b> o, nello specifico, <b>carenza di una corretta e regolare pulizia dei denti</b>; situazioni organiche o psichiche che, per <b>l'abbassamento delle difese immunitarie</b>, alterano la capacità dell'organismo di combattere l'azione e la proliferazione dei batteri (malnutrizione, avitaminosi, diabete, anoressia, uso di droghe, AIDS); <b>Il fumo</b>; <b>Il tartaro</b>; \
          <br><br><h3><i>Sintomi</i></h3> In un primo stadio, i sintomi sono <b>alito cattivo</b>, leggero <b>sanguinamento</b> delle gengive allo spazzolamento, <b>strano sapore in bocca e cambiamento di colore</b> (rossore), consistenza (rammollimento) o forma (gonfiore) delle gengive. Con il peggiorare della patologia, si ha sanguinamento severo, alitosi marcata, le radici dei denti diventano sempre più esposte, comparsa di spazi tra i denti, eccessiva mobilità dentale, fastidi di lieve entità fino alla dolenzia diffusa dei denti.\
          ",
          image: "bocca-paradontite"
        },
        "afte": {
          title: "Afte",
          description: " Le afte in bocca, dette anche ulcere orali, sono <b>lesioni dolorose della mucosa del cavo orale</b> che, normalmente, persistono per un breve periodo di tempo, variabile da pochi giorni ad un paio di settimane; le afte in bocca possono regredire anche senza trattamenti o farmaci specifici.\
          <br><br><h3><i>Cause</i></h3> La causa della comparsa delle afte in bocca non è noto: dalle statistiche mediche si evince che queste piaghe orali <b>possono colpire chiunque</b>, compresi i soggetti in pieno stato di salute. Tuttavia, sono identificati alcuni fattori di rischio: abbandono dell'abitudine al fumo, allergie (raro), alterazioni ormonali (es. menopausa), carenza vitaminica, celiachia, HIV, lesioni a seguito della quotidiana pulizia ai denti, predisposizione genetica, stress.\
          <br><br><h3><i>Sintomi</i></h3> Le afte in bocca determinano una sintomatologia circoscritta al cavo orale: le ulcere sono <b>piaghe dolorose</b>, <b>arrossate</b>, la cui comparsa è anticipata da una percezione di <b>bruciore e pizzicore</b> nella zona. Solo di rado, le ulcere alla bocca si estendono alle mucose genitali.\
          ",
          image: "bocca-afte"
        },
        "mughetto": {
          title: "Mughetto",
          description: "Il mughetto è l'espressione più comune e caratteristica della candidosi orale, <b>una malattia infettiva della mucosa boccale</b> sostenuta da lieviti appartenenti al genere Candida. Tra questi, l'agente eziologico più comune è la Candida albicans.\
          <br><br><h3><i>Cause</i></h3> Il mughetto <b>si presenta in persone che hanno le difese immunitarie basse</b>, quindi interessa bambini ed anziani. Quando questa malattia si presenta in persone giovani e sane, può essere o a causa di un abuso di antibiotici, o si potrebbe sospettare di aver contratto l’HIV (quale abbassa le difese immunitarie). \
          <br><br><h3><i>Sintomi</i></h3> Il mughetto è caratterizzato dalla <b>comparsa di placche biancastre</b>; le sedi comunemente colpite sono il <b>dorso della lingua e meno spesso il palato</b>, mentre se si estende nella retrobocca, nell'esofago e nella laringe rappresenta potrebbe voler significare la presenza <b>un'importante depressione del sistema immunitario</b>.\
          ",
          image: "bocca-mughetto"
        },
        "herpes-labiale": {
          title: "Herpes labiale",
          description: "L'herpes labiale (o herpes labialis) è <b>una malattia infettiva</b> caratterizzata dalla <b>comparsa di numerose vescicole</b> intorno alle labbra o in altre zone del viso, come guance e naso. \
          <br><br><h3><i>Cause</i></h3> L'herpes labiale è una malattia infettiva di origine <b>virale</b>. L'agente causale prevalentemente implicato è il <b>virus herpes simplex tipo 1 (HSV-1)</b>. Seppure in misura minore, l'herpes labiale può essere provocato anche dal virus herpes simplex tipo 2 (HSV-2) che, di solito, è responsabile dell'infezione genitale. Il virus penetra nell'organismo attraverso la pelle e le mucose, dove infetta le cellule epiteliali e ne determina la morte, da cui conseguono le vescicole e le altre lesioni tipiche della malattia.\
          <br><br><h3><i>Sintomi</i></h3> L'herpes labiale si manifesta tipicamente con la comparsa di <b>fastidiose e dolorose vescicole</b>, ripiene di liquido limpido, in genere sulle labbra o in prossimità delle stesse. L'insorgenza delle bollicine è preceduta da <b>pizzicore, bruciore e lieve tensione</b>. Nelle zone in cui compaiono le vescicole, l'herpes alle labbra provoca anche <b>dolore, prurito e momentanea perdita della sensibilità al tatto</b>. \
          ",
          image: "bocca-herpes"
        }
      }
    },
    "respiratorio": {
      title: "Apparato Respiratorio",
      description: "L'apparato respiratorio, o sistema respiratorio, è l'insieme di organi e tessuti che provvede <b>all'introduzione nell'organismo dell'ossigeno</b> atmosferico contenuto nell'aria e, contemporaneamente, <b>all'espulsione dell'anidride carbonica</b> generata dall'attività cellulare e rappresentante un prodotto di scarto nocivo. Questo processo prende il nome di respirazione.",
      image: "app_resp-polmoni",
      next: "circolatorio",
      prev: "bocca",
      move: true,
      topics: {
        "raffreddore": {
          title: "Raffreddore",
          description: "Il raffreddore è una delle <b>malattie più comuni</b> a livello mondiale. Si tratta di una patologia di origine <b>virale</b> che provoca <b>l'infiammazione della mucosa nasale e faringea (gola)</b>. Altamente contagioso, il raffreddore può essere trasmesso sia da malati, che da portatori sani. \
          <br><br><h3><i>Cause</i></h3> La forma più comune di contagio è quella diretta: <b>starnuti, tosse e goccioline di saliva</b> permettono il passaggio diretto dei virus da un organismo all'altro. Anche il dialogo può diventare causa di trasmissione diretta in quanto durante il colloquio possono essere espulse, involontariamente, piccole gocce di liquido salivare.\
          <br><br><h3><i>Sintomi</i></h3> I sintomi del raffreddore sono piuttosto comuni: <b>naso chiuso e gocciolante, congestione nasale, gola irritata talvolta associata a febbre, tosse, emicrania, raucedine (cambiamento anomalo della voce), infiammazione dei linfonodi nel collo e dolori muscolari</b>.\
          ",
          image: "app_resp-raffreddore"
        },
        "bronchite": {
          title: "Bronchite",
          description: "La bronchite è <b>un'infiammazione persistente della mucosa che riveste i bronchi</b>, correlata principalmente all'inalazione di sostanze irritanti e dannose, come il fumo di sigaretta, gas di scarico e inquinanti atmosferici. \
          <br><br><h3><i>Cause</i></h3> La bronchite è principalmente causata <b>dall’inalazione di sostanze tossiche</b>, quindi in questa categoria rientrano: fumo di tabacco e sigaretta, fumo passivo, esposizione a fumi e vapori irritanti o l’inquinamento dell’aria.\
          <br><br><h3><i>Sintomi</i></h3> La bronchite è definita da <b>tosse persistente</b>, che può associarsi a <b>dispnea</b>, cioè un aumentato sforzo a respirare o affanno durante gli sforzi fisici, anche modesti (ad esempio, camminando). Nella bronchite, <b>il catarro può essere estremamente denso e difficile da eliminare</b>.\
          ",
          image: "app_resp-tossire"
        },
        "polmonite": {
          title: "Polmonite",
          description: "La polmonite è <b>un'infiammazione</b>, di solito acuta, <b>del tessuto polmonare</b> per lo più interessa sia gli alveoli polmonari (piccole cavità in cui avvengono gli scambi di gas tra l'aria respirata e il sangue). \
          <br><br><h3><i>Cause</i></h3> Generalmente, la polmonite è causata da infezioni di <b>natura batterica, virale</b> o, più raramente, <b>fungina</b>. Anche l'inalazione di liquidi o sostanze chimiche, così come l'aspirazione di residui alimentari e succhi digestivi, determina il quadro infiammatorio tipico della malattia (in questi casi, si parla di polmonite ab-ingestis).\
          <br><br><h3><i>Sintomi</i></h3> In risposta all'infiammazione, <b>i polmoni si riempiono di liquido</b>, rendendo difficile la normale funzione respiratoria, con comparsa di dispnea (respiro affannoso). Spesso <b>i sintomi della polmonite ricalcano quelli di una banale influenza</b>, con tosse, mal di testa, malessere generale e febbre. Talvolta, compaiono anche dolore acuto al torace, asma, inappetenza e nausea.\
          ",
          image: "app_resp-Polmonite"
        },
        "tubercolosi": {
          title: "Tubercolosi",
          description: "La tubercolosi (TBC) è <b>una malattia infettiva e contagiosa</b>, causata dal batterio Mycobacterium tuberculosis o bacillo di Koch, dal nome del medico e batteriologo tedesco che lo scoprì nel 1882.\
          <br><br><h3><i>Cause</i></h3> La tubercolosi - che nella maggior parte dei casi interessa i polmoni - si trasmette attraverso <b>goccioline di saliva emesse dal portatore dell'infezione durante i colpi di tosse, gli sputi e gli starnuti</b>.  Fortunatamente, la maggior parte delle persone che ne entrano a contatto non sviluppano i sintomi della malattia, che viene efficacemente spenta sul nascere dal sistema immunitario. \
          <br><br><h3><i>Sintomi</i></h3> Tra le possibili manifestazioni della tubercolosi rientra <b>la rapida e inspiegabile perdita di peso accompagnata a febbre, sudorazioni notturne, brividi, perdita di appetito e tendenza ad affaticarsi molto facilmente</b>. Possono inoltre comparire tosse continua che dura per più settimane accompagnata da <b>dolori toracici</b> all'atto di respirare o tossire.\
          ",
          image: "app_resp-tubercolosi"
        },
        "tracheite": {
          title: "Tracheite",
          description: " La tracheite è <b>l'infiammazione a carico della trachea</b>, il condotto elastico e flessibile che unisce la laringe ai bronchi primari. La tracheite può essere una condizione di natura <b>infettiva</b> oppure di natura <b>non-infettiva</b>.\
          <br><br><h3><i>Cause</i></h3> Nella maggior parte dei casi, la tracheite è la conseguenza di <b>un'infezione di tipo batterico (tracheite batterica) o virale (tracheite virale)</b>. Più raramente, è dovuta a condizioni o fattori irritativi, che non hanno natura infettiva. In ogni caso i sintomi non variano da un tipo di tracheite a un altro.\
          <br><br><h3><i>Sintomi</i></h3> Le forme di tracheite sono tipicamente responsabili sei seguenti sintomi: <b>tosse grave e profonda, febbre alta, naso che cola, dolore al petto che si accentua con la tosse, mal di gola, congestione nasale, starnuti, dolore alla deglutizione e infine difficoltà respiratorie</b>.\
          ",
          image: "app_resp-tracheit"
        },
        "asma": {
          title: "Asma",
          description: "L'asma è <b>una malattia infiammatoria cronica delle vie aeree</b>, caratterizzata dall'ostruzione, generalmente reversibile, dei bronchi. \
          <br><br><h3><i>Cause</i></h3> L'infiammazione bronchiale è spesso causata dalla <b>sensibilizzazione dell'albero bronchiale a particolari allergeni</b>; in pratica, al contatto con determinate sostanze (pollini, inquinanti, fumo ecc.) le vie respiratorie di un soggetto asmatico rispondono in maniera esagerata infiammandosi e restringendosi.\
          <br><br><h3><i>Sintomi</i></h3> Quando una persona soffre di asma può accusare alcuni dei seguenti sintomi:\
          <ul><li><b>Tosse stizzosa</b>, più o meno persistente, che può comparire o accentuarsi durante le ore notturne, talvolta associata a <b>senso di naso chiuso o a starnuti ripetuti</b>;</li>\
              <li><b>Difficoltà respiratoria o dispnea</b> (respiro affannoso, fiato corto);</li>\
              <li><b>Il respiro è sibilante</b> anche se non sempre tale caratteristica viene percepita dal paziente.</li>\
          </ul>\
          ",
          image: "app_resp-asma"
        }
      }
    },
    "circolatorio": {
      title: "Apparato circolatorio",
      description: "L'apparato circolatorio è <b>l'insieme di organi e vasi</b> che permettono al <b>sangue</b> di circolare, così da trasportare nutrienti e quant'altro alle varie \
      cellule del corpo umano, il tutto con lo scopo di provvedere a diverse funzioni. Le patologie relative sono note come <b>malattie cardiovascolari</b> e, purtroppo, sono \
      molto diffuse. In Italia queste rappresentano le principali cause di mortalità e invalidità.  Nonostante ciò, le malattie cardiovascolari sono in gran parte \
      prevedibili, poiché oltre ai fattori non modificabili (età, sesso e genetica), è possibile notare anche fattori legati a comportamenti e stili di vita. Ecco alcune \
      tra le malattie cardiovascolari più diffuse:",
      image: "sist_circolatorio",
      next: "digerente",
      prev: "respiratorio",
      move: true,
      topics: {
        "ictus": {
          title: "Ictus",
          description: "L'ictus è una grave condizione medica,<b> potenzialmente mortale</b>, che comporta un danno all'area di tessuto cerebrale che non riceve più sangue ossigenato o, addirittura, la sua necrosi (o morte). Tale malattia si contraddistingue per <b>l'insorgenza improvvisa</b> e comporta la necessità di un intervento terapeutico immediato e adeguato alle esigenze del paziente. \
          <br><br><h3><i>Cause</i></h3> L'ictus è la conseguenza di <b>un'interruzione o di una riduzione dell'apporto di sangue ossigenato</b> a un'area più o meno estesa del cervello. Nella maggior parte dei casi, a compromettere l'apporto di sangue al cervello è la presenza di <b>un’ostruzione</b> all'interno di un'arteria cerebrale o, più raramente, la compromissione è dovuta alla <b>rottura </b>di un'arteria cerebrale e all'emorragia che ne deriva.  \
          <br><br><h3><i>Sintomi</i></h3> I sintomi e i segni di un ictus variano da paziente a paziente, a seconda dell'area di cervello interessata, questi sono il riflesso della <b>perdita di una o più funzioni cerebrali</b>. Sintomi tipici sono: \
          <ul><li>mancanza improvvisa di forza;</li> \
          <li>formicolio e mancanza di sensibilità a un braccio e/o a una gamba;</li> \
          <li>difficoltà nel parlare, nel vedere o nel percepire i suoni da un lato;</li> \
          <li>mal di testa, nel caso la causa è un'emorragia cerebrale.</li> \
          </ul> ",
          image: "sist_circolatirio-ictus"
        },
        "infarto": {
          title: "Infarto",
          description: "Nel linguaggio comune, il termine infarto si riferisce alla <b>necrosi(o morte) del tessuto muscolare cardiaco</b>, per questo motivo è più corretto parlare d'<b>infarto al miocardio </b>. Le ragioni per cui una regione più o meno estesa del cuore va incontro a necrosi sono diverse e tutte riconducibili all'insufficiente apporto di ossigeno alle cellule che la compongono. \
          <br><br><h3><i>Cause</i></h3> La principale causa dell'infarto è <b>l'interruzione o la drammatica riduzione dell'irrogazione sanguigna al cuore</b>. Tale problema può essere causato da un'ostruzione completa o parziale di un'arteria coronaria, da un suo spasmo o da una sua malformazione. Il grado e la durata dell'ostruzione determinano gravità e conseguenze dell'infarto miocardico, per questo motivo è importante saperne cogliere i sintomi e allertare prontamente i soccorsi sanitari nel caso questi si manifestino.   \
          <br><br><h3><i>Sintomi</i></h3> I sintomi di un imminente infarto possono comparire all'improvviso, nel corso delle ore, nei giorni precedenti a tale evento, in maniera asintomatica o può sorgere in maniera brusca e drammatica determinando la morte improvvisa. I sintomi tipici sono: \
          <ul><li>difficoltà a respirare;</li> \
          <li>nausea e vomito;</li> \
          <li>sudorazione fredda e cute umida;</li> \
          <li>agitazione, ansia, pallore, ricerca invana di una posizione capace di calmare il dolore;</li> \
          <li>vertigini e svenimenti;</li> \
          <li>aumento degli episodi di dolore toracico nei giorni o nelle settimane precedenti;</li> \
          <li>pressione, disagio, fastidio o dolore oppressivo al centro del petto.</li> \
          </ul> ",
          image: "sist_circolatorio-infarto"
        },
        "aritmia": {
          title: "Aritmia",
          description: "Si parla di aritmia quando il cuore batte troppo <b>lentamente</b> (<b>Brachicardia</b>), troppo <b>velocemente</b> (<b>Tachicardia</b>) o <b>in modo irregolare</b> (<b>Extrasistolia</b>), infatti, di norma il cuore batte a cadenza regolare con frequenza che varia nell’adulto da 60 a 100 battiti al minuto. Questo vuol dire che in caso di aritmia è alterato il battito che gestisce la circolazione del sangue. Le aritmie sono <b>benigne</b> il più delle volte, tuttavia, esistono casi in cui possono essere la spia di malfunzionamenti, disfunzioni cardiache o extra-cardiache strutturali o congenite.   \
          <br><br><h3><i>Cause</i></h3>Una particolare condizione di aritmia può essere causata da fattori genetici, dall'acquisizione precedente di alcune malattie cardiovascolari, abuso di alcool, droghe, fumo, intossicazione da farmaci o/e ipertiroidismo.   \
          <br><br><h3><i>Sintomi</i></h3> Poiché esistono varie forme di aritmia, ognuna con il proprio gruppo di sintomatologie, elencheremo i sintomi principali: \
          <ul><li>dispnea, respirazione difficile, forzata, accompagnata da una sofferenza soggettiva;</li> \
          <li>ansia;</li> \
          <li>dolore al petto;</li> \
          <li>capogiri e vertigini;</li> \
          <li>senso di debolezza;</li> \
          <li>affaticamento dopo minimi sforzi;</li> \
          <li>tachicardia, brachicardia o battito irregolare.</li> \
          </ul> ",
          image: "sist_circolatorio-aritmia"
        },
        "angina pectoris": {
          title: "Angina pectoris",
          description: " L'angina pectoris è una malattia che si identifica in larga misura con il proprio sintomo principale, <b>il dolore al torace</b>. Il fenomeno prende anche il nome di <b>ischemia</b>. Nell’angina pectoris l’ischemia è reversibile e non arriva al punto di provocare danno cardiaco permanente. L'angine si distingue in <b>Angina da sforzo</b>, se si presenta dopo uno sforzo fisico, freddo o particolari emozioni, <b>Angina instabile</b> se il dolore si manifesta in maniera imprevista e <b>Angina secondaria</b> se provocata da altre patologie.   \
          <br><br><h3><i>Cause</i></h3> L'angina è causata dalla riduzione, temporanea, dell’afflusso di sangue al cuore. Poiché il sangue trasporta l'ossigeno necessario, se il flusso è inadeguato si creano le condizioni per un'ischemia. La riduzione del flusso può essere prodotta da un restringimento critico delle coronarie. \
          <br><br><h3><i>Sintomi</i></h3> I sintomi dell'angina includono: \
          <ul><li>dolore acuto, pesantezza, formicolio o indolenzimento al torace, che talvolta si può irradiare verso spalle, braccia, gomiti, polsi, schiena, collo, gola e mandibola;</li> \
          <li>dolore prolungato nella parte superiore dell'addome;</li> \
          <li>mancanza di respiro;</li> \
          <li>sudorazione;</li> \
          <li>svenimento;</li> \
          <li>nausea e vomito.</li> \
          </ul> ",
          image: "sist_circola-dolore_petto"
        },
        "trombosi": {
          title: "Trombosi",
          description: "La trombosi è una <b>patologia fatale</b>, di cui soltanto un italiano su tre è a conoscenza. La prevenzione, dunque, è un <b>aspetto fondamentale</b> nella lotta alla malattia: se colta precocemente, infatti, la trombosi può venire trattata efficacemente, evitando l’insorgenza di più gravi complicazioni. \
          La trombosi è la conseguenza della formazione in un vaso sanguigno di un coagulo di sangue (<b>trombo</b>), dunque un grumo solido di globuli bianchi, globuli rossi e piastrine che ostacola la circolazione all’interno del vaso causando la morte (necrosi ischemica) dell’organo verso cui il sangue bloccato sarebbe stato diretto. \
          Quando parliamo di trombosi dobbiamo distinguere tra <b>trombosi arteriosa</b> e <b>trombosi venosa</b>, a seconda se il trombo interessa un’arteria o una vena. \
          <br><br><h3><i>Cause</i></h3> Nelle trombosi arteriose e cardiache prevale il fattore lesivo e turbolento, mentre i trombi venosi si formano preferibilmente in presenza di stasi ematica. \
          Più in particolare, le trombosi venose sono solitamente la conseguenza di uno o più dei seguenti fattori di rischio: traumi, interventi chirurgici, immobilità prolungata, vene varicose, infezioni, lesioni delle pareti venose, malattie infettive, ustioni, tumori maligni, età avanzata, terapia con estrogeni, obesità, gravidanza e parto. \
          <br><br><h3><i>Sintomi</i></h3> Riconoscere i sintomi della trombosi venosa può non essere semplice, in quanto generalmente tendono a manifestarsi quando si sono già sviluppate complicazioni più severe. \
          I campanelli d’allarme possono essere aumento di volume, sensazione di calore, intorpidimento e arrossamento della zona o dell’arto interessato. La presenza di questi sintomi non dovrebbe essere presa alla leggera, e qualora si verificassero è opportuno consultare uno specialista. \
          Anche dispnea (dunque difficoltà respiratorie), che siano a riposo o sotto sforzo, alterazioni improvvise del ritmo cardiaco, e tosse con tracce di sangue e dolore toracico o generalizzato, sono sintomi che possono segnalare una possibile presenza di emboli a livello polmonare. Si tratta di un pericolo potenzialmente mortale, da non prendere alla leggera. ",
          image: "sist_circolatorio-trombosi"
        }
      }
    },
    "digerente": {
      title: "Apparato digerente",
      description: "L'apparato digerente è l'insieme degli organi e delle strutture incaricate all'assunzione, all'elaborazione e all'assorbimento dei cibi e all'eliminazione delle parti di cibo non digerite (residui). È formato dalla bocca, dall'epiglottide, dalla faringe, dall'esofago, dallo stomaco, dal fegato, dal pancreas, dall'intestino tenue e dall'intestino crasso.",
      image: 'digerente',
      next: "pelvica",
      prev: "circolatorio",
      move: true,
      topics: {
        "gastrite": {
          title: "Gastrite",
          description: "Con il termine gastrite si intende un’infiammazione della mucosa che riveste la parete interna dello stomaco. Si tratta di una condizione molto comune.\
          <br><br><h3><i>Cause</i></h3>In genere, la gastrite compare quando la barriera difensiva che protegge la mucosa dello stomaco (mucosa gastrica) si indebolisce a causa di uno, o più, dei seguenti fattori:\
            <ul><li>Infezione da helicobacter pylori;</li>\
            	  <li>Abuso di alcol;</li>\
                <li>Assunzione prolungata di farmaci antinfiammatori;</li>\
                <li>Eventi stressanti;</li>\
                <li>Reazione autoimmune, condizione rara che si verifica quando il sistema di difesa dell’organismo (sistema immunitario) attacca per errore le cellule della mucosa gastrica.</li>\
            </ul>\
          <br><h3><i>Sintomi</i></h3>I sintomi possono comparire improvvisamente ed essere intensi (gastrite acuta), oppure, svilupparsi lentamente e durare nel tempo (gastrite cronica). I sintomi più comuni sono:\
            <ul><li>Dolore e crampi allo stomaco;</li> \
                  <li>Bruciore di stomaco;</li> \
                  <li>Nausea e vomito.</li>\
            </ul>",
          image: 'gastrite'
        },
        "crohn": {
          title: "Morbo di Crohn",
          description: "La malattia di Crohn è caratterizzata da un’infiammazione cronica dell’intestino, che può colpire tutto il tratto gastrointestinale, dalla bocca all’ano.\
          <br><br><h3><i>Cause</i></h3>Le cause della malattia non sono note. Sembra però che una combinazione di fattori, come la predisposizione genetica, fattori ambientali, fumo di sigaretta, alterazioni della flora batterica intestinale e della risposta immunitaria, possano scatenare l’infiammazione intestinale.\
          <br><br><h3><i>Sintomi</i></h3>In un primo momento si può avere febbre, successivamente compaiono dolori addominali, in particolar modo nel quadrante inferiore destro dell’addome, dove la malattia si localizza spesso. Il dolore si manifesta improvvisamente e aumenta alla palpitazione. Il morbo di Crohn si caratterizza anche per la presenza di diarrea (3-4 scariche al giorno), con feci semiliquide o acquose, ma senza presenza di sangue visibile.",
          image: 'crohn'
        },
        "emorroidi": {
          title: "Emorroidi",
          description: "Quello delle emorroidi è un problema molto comune. Le emorroidi sono dei cuscinetti di tessuto vascolarizzato, presenti nella parte terminale del retto, vicino all'ano. In determinate circostanze possono infiammarsi e gonfiarsi oltre misura, diventando visibili ad occhio nudo.\
          <br><br><h3><i>Cause</i></h3>Si verificano per una congestione di sangue e le cause possono essere molteplici:\
            <ul><li>Dieta <b>non</b> equilibrata e povera di fibre con scarso apporto di acqua;</li>\
              <li><b>Stitichezza cronica</b>: durante la defecazione, il maggiore sforzo e lo stare a lungo seduti sul wc favorisce l'irritazione delle emorroidi;</li>\
              <li><b>Gravidanza</b>: in alcune circostanze, le donne diventano più vulnerabili alla malattia emorroidaria.</li>\
              <li><b>Abitudini di vita</b>: sedentarietà, abitudine al fumo di tabacco e pratica di alcuni sport, come l'equitazione o il ciclismo;</li>\
              <li><b>Obesità</b> e <b>sovrappeso</b>;</li>\
              <li><b>Mantenimento della stazione eretta</b>, per prolungati periodi di tempo;</li>\
              <li>Abitudine di stare a lungo <b>seduti sul wc</b>, ad esempio per leggere;</li>\
              <li>Defecazioni troppo <b>frettolose</b> o rimandate per vari motivi;</li>\
              <li>Predisposizione personale e familiare alla fragilità vasale ed alla tendenza alle varici, anche in altri distretti corporei.</li>\
            </ul>\
          <br><h3><i>Sintomi</i></h3>Le emorroidi si rigonfiano al margine dell'ano e sono spesso visibili anche ad occhio nudo e percepibili al tatto sotto forma di una \"pallina\". Le dimensioni delle emorroidi possono essere variabili (piccole o grandi). Altri sintomi possono essere: <b>prurito anale</b>, <b>bruciore</b> e <b>stimolo ad evacuazioni ripetute</b>.",
          image: 'emorroidi'
        },
        "dispepsia": {
          title: "Dispepsia",
          description: "Con “dispepsia” si intende una difficoltà digestiva. \
          <br><br><h3><i>Cause</i></h3>Le cause possono essere molteplici, come ad esempio: \
            <ul><li>Uso di medicinali (antinfiammatori non steroidei o FANS come l'acido acetilsalicilico, ferro, teofillina ecc.);</li>\
                <li>Ulcera gastrica (allo stomaco);</li>\
                <li>Gastriti (infiammazioni della mucosa interna dello stomaco);</li>\
                <li>Cattiva alimentazione (dieta);</li>\
                <li>Obesità;</li>\
                <li>Malattia da reflusso gastroesofageo.</li>\
            </ul>\
          <br><h3><i>Sintomi</i></h3>La dispepsia funzionale si presenta con una vasta varietà di sintomi localizzati prevalentemente a livello dello stomaco e del duodeno. I sintomi tipici comprendono:\
            <ul><li>Senso di sazietà precoce durante i pasti;</li>\
                <li>Dolore epigastrico (nella parte alta dell'addome);</li>\
                <li>Gonfiore addominale;</li>\
                <li>Alitosi;</li>\
                <li>Bruciore di stomaco (pirosi gastrica);</li>\
                <li>Nausea o vomito;</li>\
                <li>Eruttazione;</li>\
                <li>Senso di rigurgito.</li>\
            </ul>",
          image: 'dispepsia'
        }
      }
    },
    "pelvica": {
      title: "Zona pelvica",
      description: "In tale sezione tratteremo principalmente problematiche legate alla <b>salute e igiene relative a organi e apparati della zona pelvica</b>, cioè la parte del corpo umano compresa tra <b>l’addome e le cosce</b>. L'abitudine ad una corretta igiene intima è una pratica molto salutare, che andrebbe inculcata <b>sin dall'infanzia</b>. \
      Non si tratta, infatti, di stabilire semplicemente le modalità di lavaggio e pulizia, ma anche, e soprattutto, di adottare una serie di <b>comportamenti</b> utili per prevenire disturbi legati alla zona di interesse di vario tipo (perdite, irritazioni, infiammazioni, cistiti ecc.). Ecco alcune problematiche tra le più <b>comuni ed importanti</b> che tratteremo in tale sezione:",
      image: "Sistema_urinario",
      next: "pelle",
      prev: "digerente",
      move: true,
      topics: {
        "aids": {
          title: "AIDS",
          description: " La sindrome da immunodeficienza acquisita (AIDS) è una malattia <b>infettiva provocata dal virus HIV</b>, che attacca il sistema immunitario, rendendo più suscettibili alle infezioni e all'insorgenza di alcuni <b>tumori</b>. \
          La sindrome da immunodeficienza acquisita è caratterizzata, infatti, dalla <b>progressiva perdita della capacità di difesa immunitaria</b>, che non è più in grado di proteggere l'organismo dalle malattie. \
          <br><br><h3><i>Cause</i></h3> È importante ricordare che l’AIDS è causato dalla malattia infettiva HIV , la quale è trasmissibile attraverso tre modalità:\
          <ul>\
              <li>ematica, nel caso di contatto ematico (sangue) diretto tra un sieropositivo e quello di una persona sana (schizzi di sangue, esposizione stretta e diretta con gravi ferite aperte), nel caso di una trasfusione di sangue infetto e/o trapianti di organi infetti o nel caso in cui entri in contatto con siringhe usate infette; </li>\
              <li>materno-fetale, una madre sieropositiva può contagiare il figlio durante la gravidanza, al momento del parto o dopo la nascita;</li>\
              <li>sessuale, la modalità più frequente di trasmissione dell'infezione da HIV, nel caso sia abbiano <b>rapporti non protetti con persone sieropositive</b>. </li>\
          </ul> \
          <br><h3><i>Sintomi</i></h3> La manifestazione del virus è generalmente caratterizzata da <b>due fasi distinte</b>. Nella prima fase, dopo alcune settimane dall'infezione, i pazienti posso lamentare i sintomi di una sindrome simil-influenzale caratterizzata da febbre, dolore articolare e muscolare, manifestazioni cutanee, sudorazioni notturne. La progressione dell'infezione <b>varia da persona a persona</b> e in alcuni casi può restare senza sintomi per molti anni. \
          Nel caso non si effettuino controlli precoci con la terapia <b>antiretrovirale</b>, l'infezione progredisce ad AIDS. In questa fase si possono manifestare infezioni causate da patogeni “opportunisti” già presenti nell'organismo che portano a <b>malattie</b> la cui progressione può essere potenzialmente <b>mortale</b>. \
          ",
          image: "HIV"
        },
        "infezioni urinarie": {
          title: "Infezioni urinarie",
          description: "Le infezioni urinarie sono le infezioni a carico delle strutture anatomiche che formano il cosiddetto <b>apparato urinario</b>, cioè: reni, ureteri, vescica e uretra. Le componenti dell'apparato urinario maggiormente colpite sono <b>l'uretra e la vescica</b> (l'infezione urinaria più frequente è la cistite); tuttavia, anche se in modo assai più raro, possono essere coinvolti anche gli altri distretti dell'apparato urinario.\
          <br><br><h3><i>Cause</i></h3> In condizioni normali, le urine sono sterili, così come l'intero apparato urinario, tranne la parte terminale dell'uretra maschile in cui è presente un'esigua (e innocua) microflora batterica. Il mantenimento della sterilità dipende dallo <b>svuotamento completo</b> e con una certa frequenza della vescica. \
          Un'infezione urinaria trae origine nel momento in cui una colonia di agenti patogeni, in genere batteri, più raramente funghi e virus, <b>invade</b> in modo massiccio l'uretra e, da qui, comincia a risalire verso la vescica e i distretti successivi dell'apparato urinario. \
          <br><br><h3><i>Sintomi</i></h3> In generale, tutte le <b>infezioni urinarie</b> - quindi sia quelle a carico di vescica e uretra, sia quelle a carico di reni e ureteri - sono <b>responsabili</b> di: \
          <ul>\
              <li>stimolo impellente e più frequente di urinare, con scarsa eliminazione e/o dolore o senso di bruciore durante l'urinazione;</li>\
              <li>dolore al basso addome;</li>\
              <li>produzione di urina torbida, maleodorante e/o con tracce di sangue;</li>\
              <li>senso di malessere generale e affaticamento.</li>\
          </ul>",
          image: "Infezione"
        },
        "malattia infiammatoria pelvica": {
          title: "Malattia infiammatoria pelvica",
          description: " La malattia infiammatoria pelvica (Pelvic Inflammatory Disease – PID) è un'infezione a carico <b>dell'apparato genitale femminile</b>. Tale malattia, laddove non adeguatamente trattata, può <b>danneggiare</b> gli organi riproduttivi e compromettere la fertilità. Il rischio è tanto maggiore quanto più volte si ripete la malattia. Nella maggior parte dei casi purtroppo è <b>asintomatica</b>. \
          \
          <br><br><h3><i>Cause</i></h3>I <b>principali fattori di rischio</b> per lo sviluppo della malattia infiammatoria pelvica sono rappresentati da inizio precoce dell'attività sessuale (difese biologiche non ancora completamente formate), mancato utilizzo di metodi contraccettivi di barriera (preservativo), IUD (recente inserimento di dispositivi intrauterini) e/o scarsa o eccessiva igiene personale.  \
          <br><br><h3><i>Sintomi</i></h3> La malattia infiammatoria pelvica può manifestarsi con: \
          <ul>\
              <li>dolore al basso ventre o durante i rapporti sessuali;</li>\
              <li>febbre;</li>\
              <li>urinazione difficoltosa e/o dolorosa;</li>\
              <li>perdite vaginali maleodoranti;</li>\
              <li>sanguinamenti vaginali anomali. </li>\
          </ul>\
          ",
          image: "Infiammazione_pelvica"
        },
        "insufficienza renale": {
          title: "Insufficienza renale",
          description: "Insufficienza renale è il termine che indica <b>un'incapacità</b>, da parte dei reni, di adempiere correttamente alle proprie funzioni, quali regolazione dell'equilibrio idrico e salino, eliminazione di acidi e scorie dall'organismo e produzione di ormoni (come l'eritropoietina). Quando l'insufficienza renale si sviluppa <b>rapidamente</b> viene definita come <b>acuta</b> ed è una condizione potenzialmente <b>letale</b> e, generalmente, se riconosciuta e trattata adeguatamente può essere <b>reversibile</b>. \
          Quando invece l'insufficienza renale si sviluppa <b>lentamente</b> (nel corso di mesi o anni), viene definita come <b>cronica</b>. Essa è una condizione <b>irreversibile</b> e i sintomi si manifestano solo tardivamente, quando la malattia è già avanzata. \
          <br><br><h3><i>Cause</i></h3> L'insufficienza renale acuta può essere determinata da una <b>diminuzione dell'apporto di sangue</b> necessario ai reni per esplicare le proprie funzioni, <b>danno></b> diretto ai reni (trombosi, infezioni, infiammazioni) od ostruzione delle vie urinarie.\
          L'insufficienza renale cronica, invece, può essere <b>causata</b> da diverse patologie come diabete, depositi di colesterolo e altro ancora, da un'ostruzione prolungata del tratto urinario o da tossicità da farmaci.\
          <br><br><h3><i>Sintomi</i></h3> I sintomi dell'insufficienza renale sono:\
          <ul>\
              <li>riduzione del volume delle urine;</li>\
              <li>ritenzione idrica, che si manifesta con gonfiore di gambe, caviglie o piedi;</li>\
              <li>sonnolenza, affaticamento e/o confusione mentale;</li>\
              <li>convulsioni o coma;</li>\
          </ul> \
          I sintomi dell'insufficienza renale cronica si sviluppano gradualmente nel tempo e <b>possono essere confusi</b> con quelli di altre patologie.",
          image: "Insufficienza_renale"
        },
        "calcoli renali": {
          title: "Calcoli renali",
          description: "I calcoli renali sono una delle <b>più comuni e antiche malattie</b> delle vie urinarie. Tale patologia è caratterizzata dalla presenza di <b>piccoli sassolini</b>, calcoli appunto, lungo il decorso delle vie urinarie. Specie se di <b>piccole dimensioni</b>, i calcoli renali possono essere <b>asintomatici</b> e sono eliminati spontaneamente senza arrecare alcun disturbo al paziente. In molti casi, però, i calcoli renali finiscono col provocare un <b>dolore acuto e violento</b> nella regione lombare.\
          <br><br><h3><i>Cause</i></h3>La calcolosi renale, spesso, non è dovuta ad una singola causa ben definita, ma può dipendere da <b>diversi fattori</b> come per esempio disidratazione, tipo di dieta, obesità, utilizzo di farmaci, presenza di altre patologie e/o casi precedenti di calcoli del paziente. \
          <br><br><h3><i>Sintomi</i></h3>La presenza e il passaggio dei calcoli renali, tuttavia, può causare la comparsa di un dolore acuto e improvviso noto come <b>colica renale</b>. Quando il calcolo rimane bloccato nel rene oppure non riesce a passare con facilità attraverso le vie urinarie, si possono manifestare diversi sintomi come dolore persistente e violento, nausea, necessità di urinare più frequentemente, urinazione dolorosa e/o con tracce di sangue. Se un calcolo <b>ostruisce completamente l'uretere</b>, si può verificare l'accumulo ed il ristagno dell'urina nel rene, causando la <b>moltiplicazione dei batteri</b> e l'infezione del rene omo-laterale. \
          ",
          image: "calcoli-renali"
        }
      }
    },
    "covid": {
      title: "Covid-19",
      description: "In tale sezione troverete informazioni sulla pandemia attualmente in corso. Di seguito sono elencati diversi argomenti che potrete affrontare in base a ciò in cui siete interessati di più.",
      image: "coronavirus",
      topics: {
        "infocovid": {
          title: "Informazioni generali",
          description: "I <b>Coronavirus</b> (CoV) sono un’ampia famiglia di <b>virus respiratori</b> che possono causare malattie da lievi a moderate, <b>dal comune raffreddore a sindromi respiratorie</b>. Sono chiamati così per le <b>punte a forma di corona</b> che sono presenti sulla loro superficie.  \
          I coronavirus sono <b>comuni in molte specie animali</b> (come i cammelli e i pipistrelli) ma in alcuni casi, se pur raramente, <b>possono evolversi e infettare l’uomo</b>. Il ceppo di coronavirus che ha causato la pandemia è il <b>SARS-CoV-2</b>. \
          <br>Il virus si diffonde principalmente tramite <b>le goccioline che vengono prodotte da una persona infetta che tossisce, starnutisce o semplicemente parla</b>. Oppure toccando una superficie infetta per poi toccare occhi, naso o bocca.",
          image: "Coronavirus-Corona"
        },
        "varianti": {
          title: "Varianti",
          description: "Tutti I virus, incluso il SARS-CoV-2 (colui ha causato il COVID-19), cambiano nel tempo. Alcuni cambiamenti potrebbero <b>modificarne le proprietà</b>, come l’incremento della trasmissibilità, incremento della sua virulenza, cambiamento nelle manifestazioni del virus, e decremento dell’efficacia delle misure di prevenzione come i vaccini e delle terapie preposte a trattare la malattia. \
          <br>Le varianti più importanti prendono il nome di lettere greche, e sono:\
          <ul>\
              <li><b>Alpha</b>, scoperta nel Regno Unito nel settembre del 2020;</li>\
              <li><b>Beta</b>, scoperta in Sud Africa nel maggio del 2020;</li>\
              <li><b>Gamma</b>, scoperta in Brasile il novembre del 2020;</li>\
              <li><b>Delta</b>, scoperto in India l’Ottobre del 2020;</li>\
              <li><b>Omicron</b>, riscontrato in diversi paesi nel novembre del 2021.</li>\
          </ul>",
          image: "coronavirus-varianti"
        },
        "sintomi": {
          title: "Sintomi",
          description: "I sintomi più comuni sono <b>febbre, tosse secca, fiato corto, perdita di appetito, dolore al petto e fatica</b>. <br>Altri sintomi che sono meno comuni e che possono affliggere alcuni pazienti includono: \
          <ul>\
              <li><b>Perdita di gusto e olfatto</b>; </li>\
              <li><b>Congestione nasale</b>;</li>\
              <li><b>Congiuntivite</b> (identificato come occhi rossi);</li>\
              <li><b>Mal di gola</b>;</li>\
              <li><b>Mal di testa</b>;</li>\
              <li><b>Dolore muscolare o articolare</b>;</li>\
              <li><b>Diversi tipi di eruzioni cutanee</b>;</li>\
              <li><b>Nausea o vomito</b>;</li>\
              <li><b>Diarrea</b>;</li>\
              <li><b>Brividi o vertigini</b>.</li>\
          </ul>",
          image: "coronavirus-sintomi"
        },
        "prevenzioni": {
          title: "Prevenzioni",
          description: "Per prevenire la trasmissione di COVID-19:\
          <ul>\
              <li><b>Tenersi a una distanza di sicurezza dalle persone</b> (almeno un metro), anche se non manifestano sintomi di malattia;</li>\
              <li><b>Indossare la mascherina</b> in pubblico, specialmente al chiuso o quando non è possibile osservare il distanziamento fisico;</li>\
              <li><b>Scegliere spazi aperti e ben arieggiati</b> a discapito di quelli chiusi;</li>\
              <li><b>Igienizzare spesso le mani</b> con acqua e sapone o usando un apposito prodotto disinfettante a base alcolica;</li>\
              <li><b>Sottoporsi alla vaccinazione appena è possibile</b>. Seguire le indicazioni in merito a livello locale;</li>\
              <li><b>Bisogna tossire o starnutire nella piega del gomito o in un fazzoletto di carta</b>, coprendo il naso e la bocca;</li>\
              <li><b>Se non ci si sente bene, è meglio restare a casa</b>.</li>\
          </ul>\
          <br><h3><i><b>Mascherine</b>:</i></h3> Se indossata correttamente, la mascherina contribuisce a <b>evitare la trasmissione</b> del virus dalla persona che la indossa agli altri, ma da sola non protegge dal COVID-19 ed è da impiegare in combinazione con il distanziamento fisico e l'igiene delle mani.",
          image: "coronavirus-prevenzione"
        },
        "conseguenze": {
          title: "Conseguenze",
          description: "Tra quelli che sviluppano sintomi, <b>la maggior parte (circa l’80%) si riprende dalla malattia</b> senza il bisogno di avere trattamenti ospedalieri. <b>Circa il 15% si ammala gravemente</b> e richiedono trattamenti con ossigeno e <b>il 5% si trova in una situazione critica</b> tale che ha bisogno della terapia intensiva (intubazione). \
          <br>Complicazioni che portano alla morte possono includere <b>insufficienza respiratoria, l’ARDS</b> (acute respiratory distress syndrome)<b>, shock settico, trombo-embolismo e inclusi danni al cuore, fegato e reni</b>. \
          <br>Alcune persone che hanno avuto il COVID-19, indipendentemente se sono stati ospedalizzati o meno, <b>continuano a manifestare alcuni sintomi</b> come fatica, problemi respiratori e neurologici.",
          image: "coronavirus-conseguenze"
        },
        "vaccini": {
          title: "Vaccini",
          description: "Il vaccino contro il COVID-19 è uno dei <b>pochi strumenti a nostra disposizione per evitare la diffusione del virus</b>. La sua somministrazione si divide in dosi da distribuire nell’arco di cinque o sei mesi ognuna. \
          <br>Alcuni dei vaccini disponibili attualmente in Italia sono:\
          <ul>\
              <li><b>Pfizer BioNTech</b>;</li>\
              <li><b>AstraZeneca</b>;</li>\
              <li><b>Il Janssen </b>(Johnson & Johnson);</li>\
              <li><b>Moderna</b>;</li>\
              <li><b>Novavax</b>.</li>\
          </ul>\
          <b>Il vaccino previene che la malattia provochi effetti gravi sulla salute</b> (oltre a renderti meno infettivo), <b>non rende completamente immune</b>. Quindi, è utile continuare a seguire le precauzioni anche dopo la vaccinazione.",
          image: "covid-vaccino"
        },
        "fakecovid": {
          title: "Fake news su Covid",
          description: "Le fake news non sono una novità su internet, ma con la grande diffusione del virus è esploso anche questo fenomeno. È per questo che in quest’ultimo periodo si è iniziato a parlare molto di più di fake news e di come evitarle.<br>\
          <br>In questa particolare sezione tratteremo le fake news riguardanti il COVID-19, per ulteriori informazioni sulle fake news è qui presente il link per la sezione apposita. <br>\
          <br>Qui sono riportati informazioni relative ad alcune delle fake news più eclatanti:<br>\
          <b>La connessione 5G NON diffonde il virus:</b> Il virus non può viaggiare attraverso le onde radio delle reti mobili. Il COVID-19 si diffonde tramite le piccole gocce che escono dalle vie respiratorie di una persona infetta che tossisce, starnutisce o parla. Oppure toccando un oggetto infetto per poi toccarsi occhi, naso o bocca.\
          <br><b>Gli antibiotici NON prevengono o trattano il COVID-19:</b> Gli antibiotici funzionano solo contro i batteri, non i virus. Se si ricevono degli antibiotici mentre si è infetti, è solo per combattere alcune infezioni da batteri che possono venire durante la malattia.\
          <br><b>Persone di tutte le età possono contrarre il virus:</b> Sia persone più anziane che persone più giovani possono contrarre il virus. Semplicemente persone anziane, o persone con particolari condizioni di salute come asma o malattie del cuore sono più vulnerabili nei confronti del virus.\
          <br><b>Igienizzante mani:</b> Esistono diverse fake news riguardanti i disinfettanti per le mani, qui illustrerò le informazioni più importanti.<br>\
          I disinfettanti per mani non causano alcun problema di salute se viene utilizzato spesso, e non incrementa la resistenza del virus nei confronti di igienizzati a base di alcohol. La quantità di igienizzante conta, poiché devi essere in grado di spalmarlo su tutte le mani. \
          È meglio lavarsi le mani o igienizzarle piuttosto che usare dei guanti, poiché questi ultimi possono comunque trasferire germi (i medici li usano per particolari operazioni). Dopo l’applicazione del disinfettante si è protetti, anche dopo aver toccato un dispenser comune che poteva essere infetto.",
          image: "FAKE_NEWS-covid",
          link: {
            title: "Link alla sezione fake news",
            destination: "/chapter/fakenews"
          }
        }
      }
    },
    "fakenews": {
      title: "Fake News",
      description: "Bufale e disinformazione sono molto pericolose quando riguardano la salute e spesso non è facile distinguerle tra milioni di informazioni.",
      image: 'fakenews',
      topics: {
        "definizione": {
          title: "Cos'è una fake news",
          description: "La definizione Fake News viene dall'inglese e significa <b>notizia falsa</b>. Le notizie false e inventate sono sempre esistite, alcune volte si tratta di vere e proprie burle, in altri casi invece sono studiate a tavolino ed hanno lo scopo di agire sull'opinione pubblica.<br><br>Nella maggior parte dei casi sono gli stessi utenti comuni a giocare un ruolo chiave nella loro diffusione. Si parla di <b>analfabetismo funzionale</b>, una forma d'ignoranza che renderebbe i lettori incapaci di capire fino in fondo quello che stanno leggendo. Uno degli effetti più gravi della diffusione delle Fake News è che ha danneggiato la credibilità delle fonti attendibili. ",
          image: null
        },
        "riconoscere": {
          title: "Come riconoscere una fake news",
          description: "Individuare le Fake News può essere complicato, perché sono create intenzionalmente per apparire come notizie reali. Nel momento in cui ci si imbatte in una notizia sensazionale o, viceversa, che vuole sollecitare indignazione, è bene approfondire. È importante accettarsi che il <b>sito</b> in cui c’è la notizia sia <b>accreditato</b> ed affidabile, quindi <b>valutare</b> sempre bene la <b>fonte</b>.<br><br>\
          Il contenuto è un altro elemento da considerare. Se è pieno di <b>errori di battitura</b> e usa un <b>linguaggio volgare</b>, o sta attaccando molto direttamente qualcosa o qualcuno, probabilmente non è attendibile. Un altro segnale che deve far insospettire è se non c’è <b>nessuna informazione sull’editore</b>: le notizie false sono spesso diffuse da bot e account falsi.<br><br>\
          <b><i><u>Nota bene</i></u></b>: È importante mettere sempre in discussione la fonte della notizia. Se hai dubbi sulla veridicità di una notizia, <b><u>evita di condividerla!</u></b>",
          image: null
        },
        "esempi": {
          title: "Esempi di fake news",
          description: "Di seguito verranno illustrati alcuni esempi di fake news che si possono trovare in giro sul web.\
          <ol><br><li>Dopo anni che si fuma, smettere è inutile &#8594; <b><u>Falso!</u></b> Gli studi dimostrano che il rischio non si azzeri del tutto, le probabilità di ammalarsi di tumore del polmone si riducono quando si smette di fumare e dopo 10 anni dall'ultima sigaretta il rischio di morire a causa di questo tumore sono circa la metà rispetto a quelle di un fumatore. Anche il rischio di ammalarsi di altri tumori legati al fumo (molti tumori testa-collo, vescica, fegato, reni, pancreas, ovaio, stomaco eccetera) si riduce progressivamente più aumenta il tempo senza fumo.</li>\
              <br><li>Cucinare con il microonde provoca tumori &#8594; <b><u>Non c'è nessuna relazione</u></b> tra questi due fattori. </li>\
              <br><li>I vaccini provocano effetti gravi anche a distanza di molti anni &#8594; <b><u>Falso!</u></b> La rarità degli effetti collaterali dei vaccini è un dato statisticamente accertato. I vaccini sono molto sicuri: gli effetti collaterali si verificano, di solito, entro pochi giorni e sono lievi e temporanei (ad esempio dolore al sito di somministrazione o lieve rialzo febbrile).</li>\
              <br><li>Ho un esaurimento nervoso? &#8594; <b><u>Non esiste</u></b> una malattia chiamata “<b><i>esaurimento nervoso</i></b>”: con questa espressione si caratterizzano tutta una serie di sintomi che sono riferibili ai disturbi dell’umore, come la depressione o la distimia, o ai disturbi d’ansia accomunati da uno stato di stanchezza e debolezza fisica e mentale.</li>\
              <br><li>La maggior parte dei suicidi avviene senza preavviso? &#8594; <b><u>Falso!</u></b> La maggioranza dei suicidi è preceduta da segnali di allarme che possono essere sia verbali che comportamentali.</li>\
              <br><li>La depressione si supera con la volontà? &#8594; <b><u>Falso!</u></b> La depressione è una malattia, questa patologia può essere curata e la sola forza di volontà non basta; è necessario, infatti, rivolgersi a degli specialisti.</li>\
              <br><li>L'attività fisica nei bambini è superflua? &#8594; <b><u>Falso!</u></b> È fondamentale impostare, fin dall'infanzia, uno stile di vita caratterizzato da dieta equilibrata e attività fisica regolare.</li>\
              <br><li>Se d'estate bevo alcol, mi disseto di più? &#8594; <b><u>Non è vero</u></b> che le bevande alcoliche dissetino. Al contrario, <b>disidratano l’organismo</b>.</li>\
              <br><li>Un mix di alcol e cocaina migliora la mia virilità? &#8594; <b><u>Falso!</u></b> Un abuso multiplo di sostanze, ad esempio alcol e stupefacenti, <b>aumenta il rischio</b> di danni a livello della sfera sessuale, oltre che ad una maggiore difficoltà nel curare il problema.</li>\
              <br><li>Il caffè fa male al fegato? &#8594; <b><u>Non è vero</u></b>, diversi studi scientifici dimostrano che un <b>moderato consumo</b> di caffè può avere addirittura effetti benefici e protettivi.</li>\
          </ol>",
          image: null
        }
      }
    }
  }
}