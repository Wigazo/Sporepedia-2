//Posición: En el indice
//BORRAR
//EN LA LINEA 155 FALTA LA CONVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var script = document.createElement('script');
script.src = 'http://code.jquery.com/ui/1.11.2/jquery-ui.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var link = document.createElement('link');
link.href = 'http://code.jquery.com/ui/1.10.2/themes/vader/jquery-ui.min.css';
link.rel = 'stylesheet';
link.id = 'ui-theme';
document.getElementsByTagName('head')[0].appendChild(link);
//

$(document).ready(function() {
	//Las comillas dentro de las frases y explicaciones se ponen así: \"
	//Varias frases en una van separadas con: \",\"  (ver la primer frase como ejemplo)
	//Los saltos de línea ("enter") se señalan así: <br> (ver sexta frase como ejemplo)
	//BBCodes, smilies, {USERNAME} (y otros) no sirven, es todo en HTML
	//f: frase, a: autor, e: explicación
	var frases = [{
        "f": "es solo un FORO!!!!!!!!!!!!!\",\"FORODOFORORODFOFOROFOROF",
		"a": "juaner",
		"e": "Una historia bastante cómica. Era la noche del 9/12/10. Wigazo estaba en Skype organizando <a href='http://sporerpg.superforo.net/'>\"Spore RPG\"</a> con juaner y también en el chat de este foro. En éste había un \"pequeño\" problemita: Tomaslimer se quejaba de que juaner le había bajado la barra de respeto injustamente y se había vuelto muy pesado. Wigazo no podía controlarlo, así que llamó a juaner a ver qué podía hacer él. Entró y fingió estar reloco, diciendo que exageraba por una barra de respeto de un foro (a lo que LCD dijo \"para que las pusiste xD\"), porque es solo un FORO!!!!"
	}, {
		"f": "espero q pasen una bonita velada con lighclaudio!",
		"a": "juaner",
 		"e": "En la noche del 9 de diciembre del 2010, juaner tuvo un  \"ataque\" de locura en el chat porque un usuario, Tomaslimer, se quejaba de una bajada injusta de su barra de respeto. Decía que había cosas más importante en la vida, como hablar con LightClaudio. Su saludo de despedida fue esta frase. Por suerte su plan funcionó, Tomás se calmó (o eso se cree, luego de que juaner se fuera, Tomás se fue)."
	}, {
		"f": "Garcais",
		"a": "Wigazo",
		"e": "Típico fail de Wig en sus comienzos en el foro, al intentar escribir \"gracias\". Generalmente le pasaba en el CG (Cuartel General del grupo clandestino y revoluciionario, JDF). También decía \"garcias\" o \"gracais\". Le pasaba muy, muy seguido."
	}, {
		"f": "Y espero que cuando vuelva, no cambien de color",
		"a": "Wigazo",
		"e": "Cuando Wig era nuevo en el foro, el staff era una lucha eterna por ver quién quedaba en el trono, siempre cambiaban los miembros. Wig cuando llegaba, por ejemplo, veía que Lirianer pasaba de ser morado a naranja. Por eso, en esos tiempos, siempre cuando se iba del chat, usaba esa frase como despedida."
	}, {
		"f": "Wig, eso es idiota.",
		"a": "3lite",
		"e": "Reacción típica de 3lite cuando Wig le contaba una idea o algo que había hecho."
	}, {
		"f": "Wigazo’s Bot Activated",
		"a": "Wigazo",
		"e": "Esto surgió de juaner, en la época donde trabajaba en <a href='http://sporerpg.superforo.net/'>\"Spore RPG\"</a>, principalmente con Wig. Wigazo estaba en Skype, y juaner figuraba como desconectado. Wig le preguntó si estaba y él dijo que no, que era un bot programado para dar respuestas. Entonces Wig le plagió la idea y usaba la frase para joder y asustar a 3lite. Decía, por ejemplo \"Play track Nº...\" y empezaba a hacer una conversación de algo que ya había pasado o de frases típicas suyas, pero también hablaba de cosas del futuro, por ejemplo, \"Pero yo no maté a Elite\". Y sí, a 3lite le asustaba.<br>El 16 de marzo del 2011, Wig usó a Wigazo’s Bot en el chat del foro para una \"aventura\" en la que viajaba al pasado y conocía a los incas. Después, se activaba el \"Modo Nuclear\" y estaba a punto de autodestruirse, provocando una gran explosión catastrófica que acabaría con el mundo. Wigazo no entendía por qué, en Taringa decía que el \"BotNet\" no tenía el modo nuclear. Entonces, Talla, una doble personalidad loca de Wigazo, hizo su aparición. Este ser reveló que él lo había reprogramado. Wig no supo cómo, pero le hizo entender que él era su verdadero yo, así que se apoderó de su mente. Recién el 23 de ese mes pudo volver, recuperar el control de su mente y sacar a Talla. Pero él juró venganza y debés jugar la aventura <a href='http://www.sporepedia2.com/t2686-jdf-y-la-venganza-de-talla-olimpiadas'>\"JDF y la Venganza de Talla\"</a> para saber cómo sigue esta historia.<br>-Spam Mode Deactivated- XD<br>También lo usó un tiempo en el juego <a href='www.sporepedia2.com/t542p416-quien-sigue-juego'>\"¿Quién sigue?\"</a>, para calcular probabilidades de quién iría a responder."
	}, {
		"f": "¿A dónde vas?",
		"a": "juaner",
		"e": "Era muy molesto con esta frase... Siempre cuando Wigazo chateaba con él, y decía que tenía que irse, juaner decía esta frase y a Wig le sonaba como un \"¿A dónde creés que vas?\". De todos modos, resultaba muy pesado."
	}, {
		"f": "James Bond will return...",
		"a": "Wigazo",
		"e": "James Bond (reubatizado Wig Bond), es una personalidad de Wig, al igual que Talla, aunque no teniendo su protagonismo. Cada vez que lo \"dormía\" con ibuprofeno, él se despedía con esta frase."
	}, {
		"f": "NYAN NYAN NYAN NYAN NYAN",
		"a": "Nyancated Forum",
		"e": "Muchos recordarán la invasión Nyan Cat que se inició el 6/12/11. Al parecer se produjo una brecha ciberdimensional en el banner de abajo (el actual tablón de anuncio), con el mundo de Nyan Cat, y atacaron nuestro foro. No se habrán olvidado de que el foro repetía esta frase incesablemente. Cuando se logró detener la invasión, el anuncio tuvo que mandarse a cuarentena, así que Wig aprovechó para poner el tablón de anuncios. Todavía se escucha los NYAN desde afuera del edificio sellado donde se encuentra el banner.<br>¿Les gustaría otra invasión? <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/3147896512.png'>"
	}, {
		"f": "Siente el choke",
		"a": "LightClaudio",
		"e": "No hay mucha seguridad sobre esta frase ni en qué situaciones debía ser usada, pero sí se sabe que la tuvo en su firma por años."
	}, {
		"f": "...",
		"a": "Lirianer",
		"e": "Esta \"frase\" es una muy usada en todos lados. Wigazo la vio por primera vez en una pelea una de las primeras veces que entró al chat. Elite le estaba retando a Lirianer por haberle llamado LOCA a sus espaldas, y Liri se limitaba a sólo responder con dicha \"frase\". Wig también la empecé a usar, y Liri le decía plagiador por eso. Pero es algo que se usa mucho en todos lados y, además, se te pegaba mucho cuando el otro la usa tanto."
	}, {
		"f": "EXACTO",
		"a": "LightClaudio",
		"e": "Nunca se supo el origen de esta frase. LCD la usaba todo el tiempo, inmediatamente después de que Elite usara el clear en el chat."
	}, {
		"f": "O de la suerte",
		"a": "LightClaudio",
		"e": "En el juego <a href='http://www.sporepedia2.com/t4313-ahorcado-multijugador'>\"Ahorcado Multijugador\"</a>, de LCD, él siempre preguntaba por la o diciendo eso."
	}, {
		"f": "Chale",
		"a": "Lirianer",
		"e": "Una de las más usadas por el foro por mucho tiempo. Muchos lo conocerán: <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/338702.gif'><br>Wigazo la vio por primera vez el día 28 de agosto de 2010. Él estaba con LCD y Lirianer en el chat, luego de que LCD le contara la historia del foro. Éste empezó a \"cantar\" y Liri y Wig le decían que cantaba mal. Entonces LCD hizo un post de renuncia y Lirianer comentó \":CHALE:\", aun cuando en ese momento no existía el emoticón.<br>Después juaner puso el smiley. Wig recuerda haber \"escuchado\" en algún lado a Liri decir \"volvé a poner al chale\". Supuestamente, Lirianer lo sacó de otra página, pero él se abstenía de revelar el origen de esta entidad... chale...<br> Sin embargo, en la <a href='http://www.sporepedia2.com/t7346-radio-sporepedia-2-primera-emision-hoy'>primera emisión de la radio</a>, Wig logró hacer que Liri revelara el origen del chale en la entrevista. Supuestamente, lo sacó de un foro uruguayo, sacó varios emoticones de ahí (sin permiso), y ya estaba el nombre \"chale\".<br>También se usaba mucho el CHALAZO, entre otras variaciones."
	}, {
		"f": "Cool",
		"a": "3lite",
		"e": "Tal vez la frase más popular del foro por un gran tiempo (en realidad, palabra). La usaba todo el mundo acá. \"Existía\" de antes de la creación del foro, puesto que Elite la usaba cotidianamente. Sin embargo, se le pegó a todo el foro en general y la usaban todo el tiempo. Hablar de coolsidad era tema cotidiano. Con la ausencia de 3lite, la frase se fue esfumando poco a poco."
	}, {
		"f": "Jum...",
		"a": "3lite",
		"e": "Típico suspiro de Elite, plagiado por muchos usuarios."
	}, {
		"f": "Odio a los n00bs.",
		"a": "<strike>TDD</strike> DG",
		"e": "Tal vez no dijo esta frase literalmente así, pero de verdad TDD (Xhaps) odiaba a los n00bs. Luego dejó de odiarlos. Pero quien es el odiador oficial de los n00bs es DG, actitud criticada por Wig en incontables ocasiones."
	}, {
		"f": "Odio a los negros",
		"a": "Risis",
		"e": "Tal vez no dijo esta frase literalmente así, pero Risis afirmaba odiar a los negros, diciendo que eran inferiores. Por este racismo despreciable (y por muchísimas cosas más), Risis fue odiado por el foro (entero)."
	}, {
		"f": "ESTAS REGLAS SON MUY INTERESANTES; ENHORABUENA EDUX 12!!",
		"a": "edux",
		"e": "Uno de los innumerables epic fails de 2d5/edux/lpamat/IvanXD/manu/mago/ycualquiernombreboboqueseteocurra, creador del foro plagio, el Clan Spore, también llamado \"Mansión de Amigos Imaginarios\". Este fue el foro plagio más \"épico\", por así decirlo, teniendo en cuenta a todas las situaciones que tuvieron que pasar.<br>Esta frase la dijo “edux” (quien tenía la faceta de ser el administrador del foro) comentando las reglas que él mismo había hecho. Pueden ver una imagen aquí: <a href='http://desmotivaciones.es/1892331/Forever-Alone#imagen'>http://desmotivaciones.es/1892331/Forever-Alone#imagen</a> (cortesía del <a href='http://www.sporepedia2.com/u348'>Payaso TeneBrozo</a>)"
	}, {
		"f": "NAVIDAD NAVIDAD SANTA ME FALLO",
		"a": "dekarserverbot",
		"e": "Reacción de dekar al ver una criatura (y otras cosas) con los colores navideños. Una versión extendida es: “NAVIDAD NAVIDAD SANTA ME FALLO, ESTA CRIATURA ES UN FIASCO NADA ME GUSTO”. Su origen es un comercial de Nintendo 64 de 1998, que duró desde 18 o 21 de diciembre hasta mediados de julio.<br><iframe width='420' height='315' src='https://www.youtube.com/embed/J9GmpVh1zFQ' frameborder='0' allowfullscreen></iframe><br><u>Letra en español</u><br>NAVIDAD NAVIDAD SANTA ME FALLO<br>MIS REGALOS SON UN FIASCO NADA ME GUSTO<br>ROPA INTERIOR<br>CD'S QUE NO SON<br>YO QUERIA UN JUEGO PARA NINTENDO 64<br>EL GRAN ZELDA TUROK 2<br>CRUIS'N WORLD, TAMBIEN STAR WARS ROGUE SQUADRON<br>ES MAS AHORA NO LOS VAMOS A COMPRAR"
	}, {
		"f": "SIIIIIIIIIIIIIYYYYYYYYY",
		"a": "dekarserverbot",
		"e": "Usada por dekar, aunque muchos la plagiaron. La sacó del \"sujeto que siempre dice sí\", de Los Simpsons. Generalmente, pone su imagen para ilustrar la escena. Su primer uso (se cree) fue en el juego Hombre Lobo, en la primera ronda. Wig era vidente y lo querían mandar a la horca, incluso cuando Elite ya había admitido ser loba. Muchos usuarios actuaron idiotamente acusando a Wigazo, cuando la loba faltante ya había confesado. Dekar se unió a la multitud, aunque él sabía que Wig era el vidente: <a href='http://www.sporepedia2.com/t1041p96-hombre-lobo#18914'>http://www.sporepedia2.com/t1041p96-hombre-lobo#18914</a><br>Finalmente, Wigazo logró ganar. "
	}, {
		"f": "23!!!",
		"a": "Wigazo",
		"e": "Frase que utilizaba cada 23 segundos en el chat, cuando se había vuelto loco por el 23."
	}, {
		"f": "El 23 es nuestra luz, síguela y encontrarás la salvación.",
		"a": "Wigazo",
		"e": "Sus enseñanzas como profeta del 23, a sus discípulos."
	}, {
		"f": "Hey! Wigazo! leave them 23 alone! All in all it's just another brick in the wall. All in all you're just another brick in the wall.",
		"a": "LightClaudio",
		"e": "El 2 de octubre del 2010, LCD, ya cansado de la locura veintitresiana de Wigazo, compuso su letra plagiada de la canción de Pink Floyd, y la cantaba muy mal, por cierto."
	}, {
		"f": "Reglas son reglas",
		"a": "juaner",
		"e": "No se recuerda cuándo la dijo, ni si tenía razón al decirlo o no. Es uno de sus tantos métodos para escapar de los problemas, al no querer poner algo en discusión solo porque está en las reglas."
	}, {
		"f": "Tu Medidor de Infracciones Menores (MIM) sube un punto. Por favor lee las reglas.",
		"a": "Wigazo",
		"e": "Muy usada en la \"Época MIM dorada\", donde el MIM se subía a morir."
	}, {
		"f": "Me tratan de viejo gruñón.",
		"a": "Wigazo",
		"e": "Ya que el Medidor de Infraciones Menores se subía tanto, todos pensaban que Wig era un viejo gruñón. Lo que no sabían era que Wigazo no subía el MIM, sino que ellos lo hacían. Wig sólo actualizaba el medidor para que muestre la información correcta, era su trabajo como moderador."
	}, {
		"f": "gente dejen de mencionar a avatar, me hacen sentir como un vampiro perdido en un foro de crepusculo",
		"a": "dekarserverbot",
		"e": "Usada varias veces, cuando algún usuario mencionaba la película \"Avatar\"."
	}, {
		"f": "MIS OJOS",
		"a": "dekarserverbot",
		"e": "Violenta reacción de dekar al ver una creación horrenda."
	}, {
		"f": "Nada nuevo o interesante",
		"a": "dekarserverbot",
		"e": "Una de los varios comentarios de dekar a las creaciones, en este caso, cuando ponía 2 puntos. Estos comentarios los sacó de Newgrounds. El post donde explicaba qué significaba cada puntuación (del 02/01/11) fue enviado a la papelera por sefirok, por \"spam\"."
	}, {
		"f": "Sos casi tan bueno como yo.",
		"a": "Vlady",
		"e": "Odioso comentario de Vlady, al ver una creación cool."
	}, {
		"f": "Leyendo archivos...",
		"a": "Wigazo",
		"e": "Wig al entrar al chat solía leer los archivos primero que nada, que es lo que se guarda en el chat, que no muestra todo, sino sólo una parte. Cuando llegaba al chat decía esta frase para que el \"clásico gilipollas\" (muchas veces interpretado por Samu) no empezara a quejarse con que no le contestaba, aun cuando este individuo ya había sido avisado de su manía de leer archivos. "
	}, {
		"f": "Tiene lo suyo.",
		"a": "dekarserverbot",
		"e": "Cuando una creación está alrededor de los 4 puntos, dekar a veces decía esta frase."
	}, {
		"f": "@juaner has sido baneado por juaner",
		"a": "Chat’s information",
		"e": "Según Wig, la frase más graciosa del foro (del 04/09/10 a las 18:57:04), antes de la de \"FOROFOROFOR...\". Antes hay que aclarar que en esos tiempos los días eran como siglos. Todos los días pasaban muchos hechos. Podría decire que un mes foro actual equivale a un día foro antiguo.<br>Anteriormente, Destroyerev había descubierto que los usuarios podían cambiar el nombre de usuario. Imaginen el caos que se armó. El 03/09/10 Wig había hecho una broma con Lirianer para sorprender a Elite e intentar hacer que suelte un \"WTF?!\". Se intercambiamos los nicks (Lirianer era colaborador y Wig nada, así que queríamos hacerle pensar que Wig lo había sustituído) y la esperamos por horas... Cuando por fin llegó, no pareció sorprendida en lo absoluto. Un fail auténtico.<br>Volviendo a la frase, Destroyerev se cambió el nick por \"@juaner\" para asustarlos. Muchos se copiaron de él, entre ellos, Liri y Wig. Ese día había una discusión en el chat, así que a Wig se le ocurrió hacerse pasar por juaner para que se asustaran y se calmaran un poco. Sin embargo, Elite le buchoneó a juaner, diciendo que lo que hizo no era correcto. Juaner entró, y sin dejar hablar a Elite, baneó a juaner, que en realidad era Lirianer, y se fue al instante. Wig creyó haberse salvado, pero luego fue baneado también por un día (del chat).<br><br>Miren la reacción de Wig, la de LCD (DarkClaudio) y la de Elite. xD<br>Skiler31 era Destroyerev. "
	}, {
		"f": "e_E",
		"a": "3lite",
		"e": "La cara de 3lite"
	}, {
		"f": "D:",
		"a": "LightClaudio",
		"e": "Esta cara la usaba LCD en \"La era del flood\", que eran los incios del foro, donde la única regla era: \"No hay reglas\" (Lo cual produjo una paradoja que casi acababa con el universo mismo).<br>Claudio solía poner mensajes en el foro, en donde su único contenido era esta \"frase\".<br>Mucho más tarde, LCD empezó a volver a usar la cara, pero en el chat, debido a que el flood ya no se permite en el foro."
	}, {
		"f": "Esto no es un concurso de popularidad.",
		"a": "juaner",
		"e": "juaner la usaba mucho cuando se quería que Elite fuese Moderadora o lo que sea. Un ejemplo fue cuando discutía Wig diciendo que Elite era mucho mejor opción que 5m0okt."
	}, {
		"f": "Damian, me asustaste!",
		"a": "juaner",
		"e": "Fue muy cómico porque fue la primera vez que juaner se llamó a Wig por su nombre. Esté le había mandado un mensaje en Skype y juaner reccionó de esta manera."
	}, {
		"f": "Cambiemos de tema",
		"a": "juaner",
		"e": "Juaner intentando evadir un problema, como acostumbraba."
	}, {
		"f": "VENGA",
		"a": "KB",
		"e": "Wig la conoció cuando KB se inició como JDF, no se sabe si la usaba de antes."
	}, {
		"f": "wolaz <img src='http://illiweb.com/fa/i/smiles/icon_cool.gif'>",
		"a": "KB",
		"e": "Cuando KB era nuevo, siempre entraba en el chat saludando así. Es más, fue lo primero que dijo en el chat, el 06/11/10 a las 23:53:12 hora Argentina."
	}, {
		"f": "Me gustan las tortugas",
		"a": "MXS",
		"e": "Estrategia de MXS para calmar una pelea. Por mucho tiempo se creyó que era una frase original de él, pero resulta que la sacó de un video famoso: <a href='http://www.youtube.com/watch?v=CMNry4PE93Y'>http://www.youtube.com/watch?v=CMNry4PE93Y</a><br>La primera vez que mencionó las tortugas fue cuando estaban él, Elite y Wigzo en Skype, haciendo llamadas en joda a una aerolínea. MXS preguntaba al que atendía \"¿Te gustan las tortugas?\"."
	}, {
		"f": "Ponte el delantal y limpia las telarañas.",
		"a": "3lite",
		"e": "Esa frase surgió por el abandono que se le dio al CG de JDF. Éste empezó a llenarse de telarañas, así que cuando sus mmiembros volvían, Elite le decía esto a Wig."
	}, {
		"f": "El delantal te queda mejor a vos.",
		"a": "3lite",
		"e": "Cuando se llenaba de telarañas el CG de JDF por su abandono, Elite obligaba a Wig a limpiarlo con esta excusa."
	}, {
		"f": "Si me necesitan, marquen 0800-2323-WIG”",
		"a": "Wigazo",
		"e": "La decía a veces antes de irse del chat (calculado a mediados de 2011)."
	}, {
		"f": "No hay que arreglar lo que no está roto.",
		"a": "dekarserverbot",
		"e": "Según dekar es la regla de oro de todo programador. La suele usar cuando Wig hace un cambio en el foro. Una de las situaciones más destacables fue cuando quiso cambiar el fondo. Para Wig esa frase no tiene sentido cuando dekar la usa, si cambia algo es porque le parece \"roto\". Por eso odia cuando dekar la usa."
	}, {
		"f": "Xhapsterion traductor Is back!",
		"a": "Xhaps",
		"e": "Cuando un usuario dice algo que nadie entiende, Xhaps aparece con el Xhapsterion traductor y traduce como puede para comprender lo que dice. Sin embargo, hubo situaciones en donde ni el Xhapsterion traductor pudo usando su magia."
	}, {
		"f": "¡Bienvenido al foro! ¿Te gusta crear himnos?",
		"a": "Mx3brainpower",
		"e": "Cada vez que daba la bienvenida, Mx3 estaba desesperado por dejar de ser tan forever alone en el subforo himnos."
	}, {
		"f": "QUIERO JUGAR A UN JUEGO",
		"a": "Wigazo",
		"e": "El día de su cumpleaños número 16 (23/10/11), Wig inventó la ruleta rusa, versión chat. Él tiraba un dado por cada uno que se apuntara y si salía el número acordado, el usuario era baneado por un tiempo definido previamente por el dado. Lo empezó a jugar muy seguido por un tiempo. La frase salió de Saw."
	}, {
		"f": "EL DADO DECIDIRÁ TU DESTINO",
		"a": "Wigazo",
		"e": "El día de su cumpleaños número 16 (23/10/11), Wig inventó la ruleta rusa, versión chat. Él tiraba un dado por cada uno que se apuntara y si salía el número acordado, el usuario era baneado por un tiempo definido previamente por el dado. La frase es lo que decía antes de tirar el dado."
	}, {
		"f": "No soy cool.",
		"a": "3lite",
		"e": "Frase muy usada cuando estaba con poco autoestima."
	}, {
		"f": "Soy cool.",
		"a": "3lite",
		"e": "Frase muy usada cuando estaba con poco autoestima, para levantársela."
	}, {
		"f": "Soy muy cool.",
		"a": "juaner",
		"e": "Autodefinición poco modesta de juaner."
	}, {
		"f": "Soy un tallarín que se mueve por aquí que se mueve por allá.",
		"a": "3lite",
		"e": "El verdadero origen de Talla (14/11/10), la personalidad loca de Wigazo.<br>Juaner fue el primero en presenciar a Talla, lo conoció 10 minutos después de su creación. Lo raro es esto:<br><br>[02:41:30] juaner se ha desconectado el Dom 14 Nov 2010, 02:41<br>[02:41:31] juaner se ha unido al Chat el Dom 14 Nov 2010, 02:41<br><br>Esto pasó en esa conver. Hay algo escalofriante: es la misma hora de <a href='http://www.sporepedia2.com/t6329-el-foro-sin-usuarios'>\"El Foro sin Usuarios\"</a>.  (De todos modos se volvió a conectar porque Talla había dicho \"spera!\", justo antes de que se fuera, pero no deja de ser tenebroso.)"
	}, {
		"f": "Es Elite, Elite , Elite Elite Elite EEEEElite",
		"a": "3lite",
		"e": "Ataque de locura de Elite, cuando le decían \"elite\"."
	}, {
		"f": "MXS Di algo!",
		"a": "3lite",
		"e": "Elite lo decía en el CG para que MXS los sacara a ella y Wig de una situación incómoda."
	}, {
		"f": "Juanes Danos el Foro",
		"a": "Darkesis",
		"e": "Al conocer la sigla de JDF, Darkesis dedujo que significaba esto (aunque no estaba muy lejos de la realidad de sus objetivos)."
	}, {
		"f": "LOOSERNENSE",
		"a": "Darkesis",
		"e": "Apodo que le dio él a Lusanense, quien había hecho el primer plagio del foro: Mis Creaciones Spore. Este foro pasó a ser <a href='http://sporerpg.superforo.net/'>\"Spore RPG\"</a>, quienes muchos le dedicaron muchísimas horas para hacerlo cool, y, ya que juaner pretendía hacer de este juego muy complejo, no se pudo terminar (es más, le daba a Wig para hacer posts sobre cosas que él no entendía, y Wig le preguntaba por Skype qué es esto, qué es aquello, y no juaner daba ni una señal de vida)."
	}, {
		"f": "Nos han plagiado el foro.",
		"a": "Staff",
		"e": "Nuestro foro ha sufrido una gran cantidad de plagios, y el staff siempre se puso las pilas para descubrir bajo qué usuario se había realizado el mismo. Comenzando por Mis Creaciones Spore, pasando por el protagonista, El Clan Spore, y el misterioso Spore Lands de Kevin, hasta las incontables Sporepedia 3 y 4, que se convierten en Gaypedia o Memespedia, etc."
	}, {
		"f": "CONTESTEME",
		"a": "últimas palabras de grox2400",
		"e": "Este usuario era un... Bueno, no era un genio, que digamos. \"Dios mío, tal vez sea el usuario más insoportable que vino al foro. Desaparece Risis y viene alguien todavía peor!\" fue la reacción de Wig ante su comportamiento.<br>La gota que colmó el vaso fue en \"El Juego de Spode\", donde él quería jugar. Sin embargo, hacía mucho flood, así que no le hacían caso para que dejara de joder. Empezó a repetir esta frase, una y otra vez. Wih le concedió este deseo contestándole con un buen ban permanente el 19 de noviembre del 2011 (las advertencias habían sido claras y numerosas)."
	}, {
		"f": "TOMA",
		"a": "LightClaudio",
		"e": "En las famosas \"Guerra de Patadas\" o \"Kick Wars\", donde los moderadores del chat se patean entre sí, tratando de que no lo pateen a uno, LCD usaba esta frase al patear a alguien."
	}, {
		"f": "Necesito más ibuprofeno.",
		"a": "Wigazo",
		"e": "Cuando la locura del 23 o de múltiples personalidades seguía luego de tomar ibuprofeno, Wig decía esto."
	}, {
		"f": "<img src='http://illiweb.com/fa/i/smiles/icon_rolleyes.gif'>",
		"a": "Otro",
		"e": "Antes ee le veía esta cara en el 95% de los mensajes de Otro. Es su emoticón favorito."
	}, {
		"f": "RWG, me das vergüenza.",
		"a": "Wigazo",
		"e": "Este usuario era muy troll, y lograba hacer enojar de verdad a Wig."
	}, {
		"f": "¡La piedra 23 será mía!",
		"a": "Wigazo",
		"e": "El 12 de septiembre de 2010, juaner trajo al foro un juego de rol llamado <a href='www.sporepedia2.com/t660-novela-mexicana-rol'>\"Novela Mexicana ROL\".</a> La mayoría de los usuarios activos se unieron al juego, aunque con algunos tubieron que insistirles (Elite odiaba ese juego y luego no podía dejar de jugarlo). Gracias a Wig, el estilo de la historia del juego se puso muy distinto al que juaner quería conseguir. Su papel era el de un viejo malvado de 66 años, de aspecto de 95, desnutrido, muy alto, barba puntiaguda, canoso, tez palida (parecía que esta a punto de morir, o que ya esta muerto).<br>En la novela, todos se mataban por conseguir la piedra, pasaba en manos de uno a otro, porque hacían lo que querían. Por eso Wig repetía siempre esta frase.<br>Finalmente, el 1 de octubre (parecía mucho tiempo en ese entonces), juaner decidió calmar todo, así que hizo que se murieran todos para hacer que fuera un sueño y despertaran en un mundo un poco más normal (y mexicano). Esto duró sólo un día activo, luego hubo un mensaje del 11/10, otro del 12/10 y juaner lo cerró por Spore RPG, y mandó el tema a la papelera.<br>Luego se han ido haciendo versiones renovadas de la novela con el correr del tiempo."
	}, {
		"f": "¿Algún juego para recomendarme?",
		"a": "juaner",
		"e": "La verdadera razón por la que juaner vuelve de vez en cuando."
	}, {
		"f": "Entro al chat cada tanto para sentirme como un Dios que vuelve de entre las sombras.",
		"a": "juaner",
		"e": "Si juaner no viene para que le recomienden juegos, lo hace por esto. Aunque no lo crean, sí dijo esta frase. Bah, siendo juaner no es nada increíble."
	}, {
		"f": "LOL, Juanes.",
		"a": "Darkesis",
		"e": "Darky intentando joder a juane<strike>s</strike>r."
	}, {
		"f": "Rumba rumba rumba",
		"a": "MC_ZX y Dragon_Soul",
		"e": "Hubo un momento en que estos usuarios siempre decían esto."
	}, {
		"f": "LOCA",
		"a": "Lirianer",
		"e": "Palabra que hizo estallar la ira de Elite, desencadenando un mal incontenible en el foro, lo que provocó un caos de medidas inimaginables. En serio que fue una palabra que significó mucho en el foro, tuvo consecuencias. Tal vez el foro sería muy, muy distinto si no fuera porque Liri pronunciara estas palabras a espaldas de Elite. En un momento LCD, o Wig, dijo que use clear antes de que apareciera Elite. Lo hizo, pero justo ella apareció. Entonces dijo “Lo vi todo”, o algo así. Y ahí empezó la pelea."
	}, {
		"f": "HAY UNA MUSICA RARA EN MI CASA",
		"a": "Samu",
		"e": "Un valiente usuario en el chat, siempre tenía miedo y una vez dijo que había una música rara en su casa y le asustaba."
	}, {
		"f": "No me hablen mal, yo soy un mensajero.",
		"a": "Kazini",
		"e": "Surgida gracias al <a href='http://www.sporepedia2.com/t3507-el-juego-de-spode-juego-historia'>\"Juego de Spode”</a>, creado por José García, un juego que fue muy, pero muy activo. Su época de oro fue por los últimos meses del 2011. El 8 de noviembre, Kazini apareció para dar un mensaje: Se iba a cerrar el juego para pasarlo a un foro especializado para los Juegos de Spode (este juego está en otros foros). A muchos les molestó la idea y, aunque no se quejaban de Kaz, él solo decía esta frase. Supuestamente, JG había tenido la idea, y lo mandó a Kaz. Kazini decía que era obligatorio hacer el cambio y que era lo correcto, ya que JG tenía la licencia creativa. Esto era una total falacia, ya que la historia la habían creado entre todos, JG sólo había hecho la introducción. Luego se descubrió que la idea la había tenido Kaz y, encima, JG decía que no fuera obligatorio. De modo que Kazini no era un simple mensajero, solo mandaba al frente, con cobardía, a su jefe."
	}, {
		"f": "Todos fuimos o somos n00bs en algo.",
		"a": "Wigazo",
		"e": "Wig, tratando de calmar el odio hacia los n00bs de Xhaps, en su momento, y luego a DG."
	}, {
		"f": "Exagerad@",
		"a": "juaner",
		"e": "Otro de los innumerables métodos de juaner para escapar de los problemas. Siempre dice que todos son exagerados. Muy pocas veces estuvo en lo cierto, o una sóla, cuando se lo dijo a tomaslimer."
	}, {
		"f": "No me gusta que anden conspirando contra mí en su chat.",
		"a": "juaner",
		"e": "Cuando JDF hacía sus misiones, es cierto que conspiraban en contra del \"Gran Dictador\", y a juaner no le gustaba nada."
	}, {
		"f": "Soy un cacahuete.",
		"a": "The_Peanut",
		"e": "Lo que decía siempre Maní."
	}, {
		"f": "eco",
		"a": "The_Peanut",
		"e": "Frase muy dicha por Maní, la empezó a usar cuando estaba sólo en el chat y escuchaba el eco al decir esta frase."
	}, {
		"f": "Cafe cafe cafe cafe!!!",
		"a": "3lite",
		"e": "Cuando Elite se mantiene un segundo sin tomar café."
	}, {
		"f": "Niños a los que les importa un pito la opinión de los demás, niños que nunca se han puesto a pensar seriamente sobre las cosas, niños, sólo niños...",
		"a": "Arwen",
		"e": "Esto es lo que piensa Arwen de los usuarios del foro, como lo dijo en su sugerencia del <a href='http://www.sporepedia2.com/t10791p16-dia-internacional-de-la-mujer-dim#212681'>Día Internacional de la Mujer</a>."
	}, {
		"f": "Y hay algo mas que me inspira... BOYS DON'T CRY!!!",
		"a": "BETTER INJECTION",
		"e": "Hubo un tiempo donde BETTER INJECTION posteaba temas de cosas que le gustaba a él, y a nadie (o casi) más, y entonces se ponía a llorar por las quejas de algunos usuarios. En uno de sus temas decía, <a href='http://www.sporepedia2.com/t10624-rock-bones-la-banda-de-peter-punk-yeah'>irónicamente</a>, esta frase."
	}, {
		"f": "Otra razón para odiarte.",
		"a": "Wigazo",
		"e": "Cada vez que Liri hacía algo que le daban ganas de matarlo, Wig decía esto. Ahora lo doce siempre cuando Liri hace algo, sin importar si es bueno o no, solo para bromear. Esta frase la añadió a Minecraft como parte de su <a href='http://www.sporepedia2.com/t6708-mi-maximum-trolling-a-minecraft'>trolleo</a>."
	}, {
		"f": "Dentro de unos años...",
		"a": "Lirianer",
		"e": "Habrá sido a principios de 2011. Liri estaba en en chat del foro y en Skype y no paraba de decir esta frase. Nunca se supo su significado."
	}, {
		"f": "Odio le estereotipo creador-creación",
		"a": "MXS",
		"e": "En \"El Juego de Spode\", MXS tenía una especie, los Greyers. Estas criaturas eran un imperio bastante malvado, quería acabar con todo en el juego. Es por eso que todos los odiaban. Sin embargo, algunos se iban más allá de esto, y odiaban a MXS (caso particular: Xhaps). MXS sólo jugaba, eso no significa que fuera así en la realidad, por eso odia “le” estereotipo creador-creación."
	}, {
		"f": "No soy edux.",
		"a": "Edux",
		"e": "2d5 negando ser edux. Lo hizo durante meses. Finalmente, Wig logró hacer que cayera en una trampa suya para descubrirlo. Fue baneado hasta el 14 de noviembre del 2012, para que puediera disfrutar del foro un mes antes del fin del mundo. "
	}, {
		"f": "Era mi primo/hermano/amigo/novio en la PC",
		"a": "Usuario con obvia doble cuenta",
		"e": "Excusas típicas de usuarios que tienen dobles cuentas."
	}, {
		"f": "JDF es el grupo VIRUS.",
		"a": "juaner",
		"e": "Descripción de JDF por juaner, durante su <a href='http://www.sporepedia2.com/t4304-entrevista-n3-juaner'>entrevista</a>."
	}, {
		"f": "¡Guerra de patadas!",
		"a": "3lite",
		"e": "Elite queriendo iniciar la Kick War."
	}, {
		"f": "No es flood, es funflood",
		"a": "3lite",
		"e": "Algunos se quejaban de que Elite hacía flood en el chat. Ella se justificaba así."
	}, {
		"f": "Cuéntame una historia.",
		"a": "3lite",
		"e": "Cuando Elite tenía miedo, quería que le cuenten historias. Wig conté la de “Las aventuras de Blue y WCC”, la cual nunca terminó."
	}, {
		"f": "¿Qué hago?",
		"a": "3lite",
		"e": "Elite siempre quería hacer algo productivo en el foro, pero no sabía qué, así que le pedía a Wig que le diera una tarea."
	}, {
		"f": "WIIIIIIIIII",
		"a": "3lite",
		"e": "Así le llamó Elite a Wigazo por un tiempo, aunque siempre prefirió que le llamara Wig."
	}, {
		"f": "Dejen a mati en paz o los baneo.",
		"a": "Wigazo",
		"e": "Hubo un tiempo en que todos molestaban a mati en el chat, así que Wig tuvo que inventar esta nueva regla. La cosa se pudo calmar, aunque Wheatley (una doble cuenta de RWG) y MC_ZX seguían, pero en menor proporción."
	}, {
		"f": "noc xq nunca netiedo lo q escribe keronaxd :S es como si fuera otro idioma... el caso.",
		"a": "juaner",
		"e": "Irónico comentario de juaner, aunque en realidad era cierto que a keronaxd (Cory) no se le entendía nunca nada. Este comentario fue en el tema de renuncia de LCD, en donde Cory había dicho esto:<br>\"ahora faltapuro jme molesten a mi por qno t conectas amesenger ahi asemos lo q qeremos\""
	}, {
		"f": "renucnio por que no se contar historias ni cantar <img src='http://illiweb.com/fa/i/smiles/icon_sad.gif'>",
		"a": "LightClaudio",
		"e": "De esta forma hizo la renuncia LCD al puesto de colaborador, aunque al final juaner hizo que se quedase como estaba. De todos modos, no mentía al decir que canta mal. Aquí pueden ver un ejemplo: <a href='http://www.youtube.com/watch?v=_zT9iJCXB9Y&feature=g-u-u'>http://www.youtube.com/watch?v=_zT9iJCXB9Y&feature=g-u-u</a> D="
	}, {
		"f": "RENUNCIO",
		"a": "LightClaudio",
		"e": "LCD renunció a su cargo al menos 3 veces. La primera fue antes de que Wig estuviese en el foro. La segunda fue cuando le dijeron que cantaba mal. La tercera fue durante \"El Incidente\". Por el abuso de las Kick Wars, Darkesis tuvo una pelea con LCD, quien finalmente renunció como Moderador. Luego de esto, juaner nunca más lo dejó estar en el staff por renunciar tanto. Este hecho también provocó que Elite fuese echada de su cargo de Moderadora y Wig de Moderador Jr. Dijo que la Moderación es algo que no servía, entonces Wig le dijo: \"OK, entonces hacete cargo vos de todo con sefirok.\" Esto le hizo reconsiderar la situación, así que dejó a un Moderador, a Wig (así que terminó ascendiendo, habiendo llegado a Jr. hasta entonces), ya que él creía que LCD y Elite eran los que le lavaban el cerebro. Fue un golpe para JDF y un fracaso para la primera misión: RM. Pero la causa nunca había sido derrotada."
	}, {
		"f": "Chinga tu madre!",
		"a": "RWG",
		"e": "Una de las razones por la que fue baneado. Se lo dijo a Elite."
	}, {
		"f": "Me joden los putacus, me jode el foro completo",
		"a": "Razor",
		"e": "Así inició su actuación de ataque de locura antes de <a href='http://www.sporepedia2.com/t10945-me-canse'>renunciar</a>."
	}, {
		"f": "Niños, fuera de mi jardín.",
		"a": "Tío Augusto",
		"e": "El Tío Augusto es un personaje ficticio creado por DigiDSoul y también Imperatrum DG. Para más información, visiten <a href='http://www.sporepedia2.com/t10662-el-tio-augusto-pillado#210232'>este tema</a>." 
	}, {
		"f": "LUSA HIJO DE Censurado",
		"a": "Darkesis",
		"e": "Darkesis se volvió loco por el plagio que había hecho Lusanense (Mis Creaciones Spore), y no paraba de putearlo."
	}, {
		"f": "Santiago Huerta Hace Hoyos",
		"a": "MXS",
		"e": "En el CG (Cuartel General del JDF), Misión inventó hacer siglas con la palabra “SHHH”. Ésta fue la más conocida."
	}, {
		"f": "¡Me vengaré!",
		"a": "Talla",
		"e": "Talla anunciando que se vengará, luego de ser dormido con el ibuprofeno, el 23 de marzo de 2011, evento <a href= 'https://www.youtube.com/watch?v=AL8aV9APcjI'>capturado en video</a>."
	}, {
		"f": "como te vamos a odiar si solo te falta el altar",
		"a": "LightClaudio",
		"e": "Cuando LCD empezó a distanciarse de JDF y Elite decía que todos la odiaban, calaudio le decía esto."
	}, {
		"f": "Oh canes del abismo, dibujen mi camino a seguir",
		"a": "Xhaps",
		"e": "Xhaps haciendo brujería para .<a href= 'http://www.sporepedia2.com/t10242-busqueda-de-rareza-una-geoda-verde#201463'>encontrar la geoda verde</a>"
	}, {
		"f": "Sólo una cosa dekar... ¿Hay algo para ti que no sea arenoso, castroso, aburrido, amargado o llorón?",
		"a": "Arwen",
		"e": "Se lo preguntó en su <a href= 'http://www.sporepedia2.com/t10791p48-dia-internacional-de-la-mujer-dim#212799'>sugerencia del Día Internacional de la Mujer</a>. Wig dije que sí hay una cosa: él mismo. Pero que nadie coincide con él en esto."
	}, {
		"f": "Adios ilusos",
		"a": "BETTER INJECTION",
		"e": "Título del <a href= 'http://www.sporepedia2.com/t10650-adios-ilusos-evil'>post de despedida</a> que hizo porque nadie compartía sus gustos, horas antes de hacer un post de regreso."
	}, {
		"f": "how do i keep getting brought up here....?",
		"a": "Davo",
		"e": "Davo, harto de la discusión que se hizo en este foro. Para más información, lean <a href= 'http://www.sporepedia2.com/t10689-el-periodico-de-mr-s2-2-edicion'>El Periódico de Mr. S2: 2ª Edición</a>."
	}, {
		"f": "Traigo droga para los usuarios.",
		"a": "Kokodrilo",
		"e": "Todos conocemos a Kokodrilo como el vendedor de drogas del foro.<br>Su origen fue en VoR, Totoi le hizo hacer un post sobre su fanatismo de la droga. Luego se le siguió diciendo camello, vendedroga, etc., para joderlo y se le quedó el apodo para siempre."
	}, {
		"f": "Seguro es una doble cuenta... Pero, ¿de quién?",
		"a": "Wigazo",
		"e": "En su estado paranoico, cuando Wig ve que un usuario se comporta de manera extraña, piensa que es una doble cuenta e intenta descubrir de quién."
	}, {
		"f": "Seguro tiene una doble cuenta... Pero, ¿cuál?",
		"a": "Wigazo",
		"e": "A veces Wig cree que hay usuarios que tienen dobles cuentas, sobre todos los baneados."
	}, {
		"f": "Todos vuelven, todos vuelven. <img src='http://illiweb.com/fa/i/smiles/icon_twisted.gif'>",
		"a": "Wigazo",
		"e": "Muchas veces Wig saluda así a alguien quién se había despedido para no volver, pero termina haciéndolo."
	}, {
		"f": "Sabía que volverías arrastrándote.",
		"a": "Wigazo",
		"e": "Muchas veces Wig saluda así a alguien quién se había despedido para no volver, pero termina haciéndolo."
	}, {
		"f": "I'M BACK IN BLACK",
		"a": "Dark Demon",
		"e": "Repetitivo saludo de DD en el chat, quien escribía en negro."
	}, {
		"f": "Edux, sé hombre y confiesa de una vez si no sos cobarde.",
		"a": "Wigazo",
		"e": "Edux fue uno de los casos de doble cuentas más difícil de cerrar, aunque de los más obvios."
	}, {
		"f": "Hey Ed!",
		"a": "Wigazo",
		"e": "Así saludaba a edux (2d5) para hacerse el amigo y sacarle información."
	}, {
		"f": "Otra misión JDF cumplida.",
		"a": "JDF",
		"e": "Mensaje que decían al tener una misión completada con éxito."
	}, {
		"f": "¡Seré Capitán Alpha!",
		"a": "tomaslimer",
		"e": "Cuando Tomás era nuevo, creía que iba a poder sustituir a juaner (el rango de Administrador se llamaba Capitán Alpha). Nunca lo logró..."
	}, {
		"f": "Wig, el administrador estrella!",
		"a": "tomaslimer",
		"e": "Tomás chupando las medias. Tal vez fue así como consiguió ser candidato JDF..."
	}, {
		"f": "Xido!",
		"a": "KB",
		"e": "La versión de \"cool!\" de KB."
	}, {
		"f": "Otro premio regalado por totoi? Ya se esta convirtiendo en el Papa Noel del foro",
		"a": "GhOsT",
		"e": "Cuando \"¡Te Reto!\" era nuevo, Totoi participaba en muchos retos, en los cuales perdía, regalándole a muchos usuarios el premio de un reto ganado."
	}, {
		"f": "ES T-O-T-O-I",
		"a": "toitoi <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1459140577.png'>",
		"e": "Muchos le decían \"toitoi\" a Totoi. Al comienzo era por equivocación, luego lo hacían para trollear. Esto llegó muy lejos y Wig tuvo que decir que al que se lo dijese en el chat de nuevo, quedaba baneado. Aunque originalmente se llamaba totoi, por un muy buen tiempo se llamó Totroix por su personaje de la novela mexicana. Wig logró convencerlo (luego de más de 2 años) de volver a llamarse Totoi (esta vez capitalizado), porque todos los conocían así, y sacarse las etiquetas ([OMY] [NJDF]), como parte de su Campaña de Purificación de Nicks."
	}, {
		"f": "Me da weba escribir",
		"a": "MC_ZX",
		"e": "Mauricio muchas veces respondía solo citando...."
	}, {
		"f": "El MIM sube un punto. Cuidado, ya está en 5.",
		"a": "Wigazo",
		"e": "Cuando un Medidor de Infracciones Menores subía a 5, había que tener cuidado, porque si se sobrellenaba, se bajaba la barra de respeto."
	}, {
		"f": "¡Chauchas!",
		"a": "Lirianer",
		"e": "Hubo un momento en el que Liri siempre se despedía así."
	}, {
		"f": "¡Listones!",
		"a": "juaner",
		"e": "Cuando juaner terminaba de hacer algo (normalmente para Spore RPG), lo decía así."
	}, {
		"f": "mi renuncia es lo mejor para el foro",
		"a": "Lirianer",
		"e": "Cuando Liri se dio cuenta que era demasiado vago para el puesto de moderación, renunció."
	}, {
		"f": "siento poner el foro en vaciones, pero wig me trata muy mal.",
		"a": "juaner",
		"e": "Una vez juaner y Wig tuvieron una pelea muy seria. Él había mandado a la papelera un tema en el que él había dicho algo mal. Wig lo sacó de la papelera y se quejó de él en el mismo tema por lo que había hecho. Juaner se enojó y tuvieron una discusión por Skype. Decidió que lo mejor sería cerrar el foro por un tiempo y hasta amenazó con borrarlo si Wig no se disculpaba públicamente."
	}, {
		"f": "siento q justos tengan q pagar por pecadores",
		"a": "juaner",
		"e": "En una pelea que tuvo con Wig, donde amenazó con borrar el foro si Wig no se disculpaba, juaner cerró el chat por un tiempo y se disculpó por hacerle pagar a todos por algo yo había hecho. Wig perdió su lugar en el staff, era Admin."
	}, {
		"f": "dile Wig Te Crees Mi Madre?Pues Toma Banneado xd",
		"a": "SSBBW",
		"e": "Durante una pelea que tuvo juaner con Wigazo, donde juaner amenazó con borrar el foro, éste estaba en el chat del foro explicando que Wig había hecho algo mal. SSBBW le dio este consejo. Finalmente no lo baneó, pero sí lo echó del staff."
	}, {
		"f": "si kieres decir algo mal de mi dilo",
		"a": "juaner",
		"e": "Siendo muy contradictorio, juaner le dijo esto a Wig, luego de haberlo castigado porque éste había dicho lo que pensaba de él. Por toda la pelea, terminó cerrando el chat y antes de hacerlo dijo esto, además de echar a Wig del staff. Finalmente, al día siguiente, hicieron las paces y todo volvió a la normalidad, aunque él ponía en culpa a los dos, no sólo a él, como Wig nunca dejó de creer que debía ser."
	}, {
		"f": "Te mandaré al espacio, Wheatley.",
		"a": "Wigazo",
		"e": "A Wig, Wheatley siempre le pareció sospechoso, actuaba raro. Era uno de los casos en los que sospechaba que era una doble cuenta. Por esto decía esta frase y finalmente lo baneó, descubriendo que él era RWG. Lo de mandar al espacio no lo inventó él, está basado en un videojuego (sería spoiler revelar por qué)."
	}, {
		"f": "¡Feliz día de la lechuga!",
		"a": "Wigazo",
		"e": "En el primer aniversario del foro, juaner había hecho un banner algo \"gay\" (así lo llamaban), que tenía un pastelito sonriente y rosas pintadas de verdes que parecían lechugas. Por esto salió que el cumpleaños del foro es el día de la lechuga. En el segundo aniversario se puso un banner con lechugas de verdad, y en el quinto, se hizo un mini banner con pastelitos sonrientenes y \"lechugas\" de colores."
	}, {
		"f": "¡Es la maldición del foro!",
		"a": "Wigazo",
		"e": "Cuando nombrás a un usuario que estuvo ausente un tiempo (o simplemente no está conectado), a veces se conecta. Esto se llama \"la maldición del foro\", existe desde los comienzos y no funciona si vos nombrás a alguien con la intención de que se cumpla la maldición. El sistema de menciones (@) es un blasfemo intento por conseguir de forma artificial facilitar el uso de este sagrado ritual."
	}, {
		"f": "¡Veo doble, 4 2d5s!",
		"a": "Wigazo",
		"e": "El 12 de mayo de 2011 Wig vio que 2d5 y edux (como saben, son el mismo) estaban conectados en el chat del Clan Spore. Wig se conectó y éste fue su saludo, <a href= 'https://www.youtube.com/watch?v=8np5o2m27_c'>sacado de Los Simpsons</a>.<br>En los archivos del chat 2d5 y edux habían estado conversando, intentando hacerle creer a Wig que eran dos personas distintas."
	}, {
		"f": "No dudo en que sea tuyo,pero es mi deber como buen usuario asegurarme de que todos cumplen las reglas",
		"a": "The_Master",
		"e": "En las primeras Olimpiadas, Samu acusó a Elite de hacer trampa y así se justificó. Esto le hizo a Wig sospechar de él y entonces examinó intensivamente sus creaciones. Descubrió que su capitán de Dark Spore era editado de uno de la Sporepedia Original, y encima sólo había cambiado su color:<br><img src='http://i1083.photobucket.com/albums/j391/Wigazo/Sagetrampa.gif'>"
	}, {
		"f": "Pasó un ángel.",
		"a": "sefirok",
		"e": "El 4 de diciembre de 2010, sef dijo este dicho venezolano, cuando nadie presente en el chat lo conocía. Según sef, el dicho \"se dice cuando un grupo se queda callado por un tiempo\"."
	}, {
		"f": "USER WAS BANNED FOR THIS POST”",
		"a": "dekarserverbot",
		"e": "Cuando dekar dice una frase de Chespirito, o de cualquier personaje del Chavo, pone esto al final del post (en negrita y en rojo). Esto se debe a que una vez fue baneado por decir \"mensos\" como la gota que rebalsó el vaso en su momento. Wig lo ha usado en varias ocasiones también."
	}, {
		"f": "Mensos",
		"a": "dekarserverbot",
		"e": "dekar fue baneado por decir esto."
	}, {
		"f": "me banearon por una frase de CHESPIRITO",
		"a": "dekarserverbot",
		"e": "Dekar se enojó, ya que sólo había dicho una frase de Chespirito y consiguió ser baneado. De ahí salió la frase \"USER WAS BANNED FOR THIS POST\" cada vez que se hace una referencia a Chespirito o algún personaje del Chavo."
	}, {
		"f": "Mi médico es el 23.",
		"a": "Wigazo",
		"e": "Cuando Wig estaba todo el tiempo hablando del 23, le recomendaban ir al médico, pero él respondía así."
	}, {
		"f": "Me caí del piso 23 y me rompí 23 huesos. Si me caía del 22, no sobrevivía.",
		"a": "Wigazo",
		"e": "Respuesta de Wig cuando LCD dijo \"Parece que se cayó del tercer piso y le afectó el golpe.\" por la manía que tenía con el 23."
	}, {
		"f": "PUTOS JUEGOS",
		"a": "LightClaudio",
		"e": "Cuando Wig llegó al foro, casi ni había juegos. En uno de sus primeros días creó varios juegos para aumentar la actividad en el foro. Esto obligó a juaner a inventar el subforo \"Juegos\". Allí muchos usuarios aumentaban su cantidad de mensajes. Por esto LCD los odiaba y se negaba a jugarlos (su personaje de \"Novela Mexicana\" tuvo que ser un NPC)."
	}, {
		"f": "Error de tipeo.",
		"a": "sefirok",
		"e": "Según el \"Manual de Usuario\" de sefirok, este error es desplegado cuando el robot comete un error al tipear una palabra."
	}, {
		"f": "Yello verde gente, ¿como estan por estos lares?",
		"a": "sefirok",
		"e": "Peculiar saludo de sef, que sorprendió en el chat."
	}, {
		"f": "el foro se a degradado mucho",
		"a": "sefirok",
		"e": "Cuando sefirok (un usuario que había llegado cuando el foro había sido recién creado) volvió, en un momento de esplendor en el foro, dijo esto, intentando que lo hagan admin para poder darle vida al foro."
	}, {
		"f": "Qué feas caras, no me gustan.",
		"a": "sefirok",
		"e": "Reacción de sefirok al ver que todos usaban los nuevos smilies de los memes."
	}, {
		"f": "Ya no hay tantos concursos, o template o actividades que insentiven a las personas a moverse en el foro",
		"a": "sefirok",
		"e": "Cuando dijo esto, estaba empezando un concurso, el \"¡Te Reto!\" y la actividad aumentaba."
	}, {
		"f": "que hace alguien de 99 años jugando spore?",
		"a": "LightClaudio",
		"e": "Cuando Wig se registraba en cualquier página, se pongo una edad mayor a la real, por las dudas (ya que era menor). Al presentarse en foro, LCD vio en su perfil que él tenía 99 años, y le <a href= 'http://www.sporepedia2.com/t528-me-presento#6092'>hizo la pregunta</a>, obviamente en broma sabiendo que no era su verdadera edad... o quizás iba en serio."
	}, {
		"f": "HOLA soy JUANERRRR no juanes",
		"a": "juaner",
		"e": "Título del <a href= 'http://www.sporepedia2.com/t11-hola-soy-juanerrrr-no-juanes'>tema de la presentación</a> de juaner, el fundador del foro."
	}, {
		"f": "WELCOME TO THE JUNGLE",
		"a": "Xhaps",
		"e": "Saludo de bienvenida de Xhaps (en ese momento, con identidad masculina y un nick \"TDD\"), que muchos plagiaron. A su vez, Xhaps lo sacó del WoW. Estaba en una hermandad y, cuando llegó un nuevo usuario, uno de la hermandad le dio la bienvenida con esta frase, con colores y todo."
	}, {
		"f": "yo pienso q no es justo porque yo fui un colaborador hace tiempo y me gane el titulo de mod jr",
		"a": "5m0okt",
		"e": "En la <a href= 'http://www.sporepedia2.com/t916p2-segunda-reunion'>segunda reunión</a>, el 12/11/10, se discutía sobre los cambios para el staff. \"Smoot\" había vuelto luego de una larga ausencia y decía que él debía ser Moderador, ya que antes de irse él era Mod Jr."
	}, {
		"f": "yo creo que seria bueno tener un moderador que mata negros xD",
		"a": "LightClaudio",
		"e": "Sugerencia racista que dio LCD en la <a href= 'http://www.sporepedia2.com/t916p2-segunda-reunion'>segunda reunión</a> (del 12/11/10, donde se discutía en el chat cambios en el staff)."
	}, {
		"f": "ELITE MOD = usara sus teclas especiales de BAN, CLEAR y KICK",
		"a": "Darkesis",
		"e": "Razón por la cual Darkesis no quería que Elite fuese Moderadora de nuevo. Ella era Colaboradora, luego de haber sido echada del Staff por \"El Incidente\" (evento donde LCD también había sido echado, y Wig ascendido de Mod Jr. a Moderador por señalarle a juaner que no podría manejar el foro solo con sefirok)."
	}, {
		"f": "LCD is a registered mark from Darkesis Company Inc.",
		"a": "Darkesis",
		"e": "Darky decía que sólo él podía usar el apodo \"LCD\" (de \"LightClaudio\", ya que él lo había inventado. LCD es el nick que Claudio usó más tarde en YouTube."
	}, {
		"f": "EPIC MAGIC DANCE <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/788553.gif'> <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/788553.gif'> <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/788553.gif'> <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/788553.gif'> <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/788553.gif'> <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/788553.gif'>",
		"a": "LeonTheLoller",
		"e": "Loca frase de LTL, sin significado claro, también usada por pivomagic."
	}, {
		"f": "PAPELERA WOO HOO",
		"a": "dekarserverbot",
		"e": "Cuando se anuncia que un tema se enviará a la papelera, así lo festeja dekar, aunque al convertirse en un clásico, muchos lo hacen además de él."
	}, {
		"f": "Así que no te vuelvas a meter con el foro. ¿Capiche?",
		"a": "JDF",
		"e": "Cuando JDF era nuevo y estaban Elite, LCD y Wig en el CG, planeaban interrogar a golpes a los trolls, terminando con esta frase. La idea era que LCD lo agarraba, Wig le pegaba y Elite decía la frase."
	}, {
		"f": "algum brasileiros?",
		"a": "Moe",
		"e": "El 27 de noviembre de 2011, estaban Wig y MXS en el Chat R para reclutar a KB(era un Xat de JDF creado con ese mismo fin, reclutar nuevos miembros, haciendo pruebas para ver si era un usuario con y consciente sentimiento de justicia). De la nada aparece un usuario llamado \"Moe\" con un Moe, de Los Simpsons, como avatar, y dice esta frase. Jamás se supo cómo llegó, Wig cree que un portal conectó nuestro mundo con el de Los Simpsons (versión doblada al portugués), y Moe quería unirse a JDF. De vez en cuando se recordaba al evento con terror."
	}, {
		"f": "D'OH!",
		"a": "Tomás Kapo Spore 2011",
		"e": "Lo decía a veces cuando era nuevo"
	}, {
		"f": "O Bob Patiño irá a su casa y se lo comerá.",
		"a": "Imperatrum DG",
		"e": "Cuando manchus92 dijo que <a href= 'http://www.sporepedia2.com/t4566-le-regalo-la-cuenta-a-mi-hermano'>le cedería su cuenta a su hermano</a>, aparentemente menor, Xhaps dijo \"Ojalá se comporte <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/2435014989.png'>\". TKS lo citó, Totoi a TKS, Koouta a Totoi, LTL a Totoi, Kenome a LTL, niko a Kenome... Dark Grox siguió esa frase completándola con ésta. Está bien que sea fanático de Bob Patiño, pero ponerlo de caníbal... "
	}, {
		"f": "BANÉENME SI QUIEREN",
		"a": "SporeOrigins",
		"e": "En los primeros Juegos Forísticos, a Dekar no le gustó que Origins le diera 2 puntos a su capitán sin poner una explicación, así que <a href= 'http://www.sporepedia2.com/t2369-twinblade#40988'>respondió de una forma ofensiva</a>. SO se enojó mucho por eso, así que le respondió de muy mala manera, sin importarle si era baneado o no."
	}, {
		"f": "Ahoi a todos!",
		"a": "CefaloSapiens",
		"e": "Saludo del fanático de los pulpos."
	}, {
		"f": "Los pulpos dominarán al mundo.",
		"a": "CefaloSapiens",
		"e": "Cefalo siempre tuvo una extraña obsesión con estos animales..."
	}, {
		"f": "Los archivos son evidencias.",
		"a": "Wigazo",
		"e": "Wig siempre copia todo el chat cuando entra para que quede para la historia y por si en un futuro lo necesitara como evidencia."
	}, {
		"f": "Menos mal que copio las convers.",
		"a": "Wigazo",
		"e": "Wig siempre guarda todo el chat cuando entra. Cada vez que necesita buscar algo en una conversación copiada lo dice. Por ejemplo, para sacar la información para mucho de estas frases, ha sacado mucha información de ellas. "
	}, {
		"f": "Elite lo ve todo E_E",
		"a": "3lite",
		"e": "A veces Elite está en el chat, aparentemente ausente, pero los está vigilando."
	}, {
		"f": "Wig me debes $1000; acordate, algún día me vas a pagar.",
		"a": "Lirianer",
		"e": "Wig le dijo a Lirianer que le iba a dar $1000 por haber sido Beta Tester de su aventura \"<a href= 'http://www.sporepedia2.com/t1043-jdf-mision-duo-de-chocolate-una-aventura-dedicada-a-elite'>JDF – Misión: Dúo de Chocolate</a>\". Todavía los sigue esperando. <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1459140577.png'>"
	}, {
		"f": "Voy a perder T_T",
		"a": "3lite",
		"e": "Estuvo llorando todas las primeras Olimpiadas y terminó siendo la ganadora."
	}, {
		"f": "Soy un relleno",
		"a": "MXS",
		"e": "MXS en estado emo, diciendo que no tiene ningún papel en JDF."
	}, {
		"f": "MXS está en estado EMO.",
		"a": "MXS",
		"e": "No hay mucha explicación para esta frase, solo que cuando se deprimía, hablaba en tercera persona, por lo que se ve. (?"
	}, {
		"f": "Nadie quiere a Elite.",
		"a": "3lite",
		"e": "Elite en estado emo."
	}, {
		"f": "Siempre que llego están discutiendo.",
		"a": "MXS",
		"e": "Hubo un momento en el que siempre que MXS llegaba al CG (Cuartel General de JDF), Elite y Wig estaban discutiendo por alguna estupidez."
	}, {
		"f": "Bebito llorón.",
		"a": "dekarserverbot",
		"e": "Así llamaba a sefirok. Una de las razones por la que sefirok quería tanto a dekar. También se lo dice a otros usuarios (y muchos se lo dicen a él), pero ese fue el primero."
	}, {
		"f": "JDF - M: RM (Misión: Robot Malvado)",
		"a": "JDF",
		"e": "La primera misión JDF (conformado por 3lite, LCD y Wigazo) se llamó así porque el antagonista era sefirok, después de juaner (quien fue el archienemigo de JDF). Le decían robot porque creían que juaner había creado a sef con las partes robóticas de Spore. La misión fue un fracaso, sefirok siguió siendo admin junior, Elite y LCD dejaron de ser Moderadores y Wig fue ascendido de Mod Jr. a Moderador."
	}, {
		"f": "¡Hereje!",
		"a": "Wigazo",
		"e": "Cuando todos jodían con el 23, Elite no quería \"creer\". Entonces, le decían esta frase, lo que la hizo enojar y abandonar el foro por 3 días. Wigazo denomina así a quienes no siguen la luz del 23."
	}, {
		"f": "Pinches ateos pendejos.",
		"a": "dekarserverbot",
		"e": "A Dekar le caen no muy bien los ateos."
	}, {
		"f": "Chupamedias, chupamedias everywhere.",
		"a": "Wigazo",
		"e": "Ser administrador de este foro hace que muchos te chupen las medias, y cansa. En el caso de Lirianer, él le chupaba las medias a juaner, y por eso era uno de los enemigos de JDF. Wigazo por mucho tiempo pidió que no tuvieran esa conducta con él. Sin embargo, con el pasar del tiempo, empezó a sentir que la situación se invirtió, que muchos no lo trataban bien para no quedar como chupamedias."
	}, {
		"f": "Detesto que hablen de mí, a mis espaldas.",
		"a": "3lite",
		"e": "Esto lo dijo cuando Lirianer le dijo LOCA en el chat y ella lo descubrió."
	}, {
		"f": "fue edux con mi cuenta q le deje yo pero ya cambie la contraseña",
		"a": "2d5 (edux)",
		"e": "Excusa barata ante una de las tantas pruebas que Wigazo presentaba para demostrar que 2d5 era edux, el creador del foro plagio \"El Clan Spore\"."
	}, {
		"f": "No te doy otra nomás porque...",
		"a": "dekarserverbot",
		"e": "Una de las frases del Chavo (en este caso de Don Ramón), arriesgándose a tener un ban, ya que la creencia popular dice que está duramente condenado el uso de frases chespiritianas."
	}, {
		"f": "Wigazo [JDF] Wigazo [JDF] Wigazo [JDF] Wigazo [JDF] Wigazo [JDF] Wigazo [JDF]",
		"a": "3lite",
		"e": "Forma de saludar en el chat que tenía Elite (Wig a veces la usaba con ella también), a la que llamaba \"funflood\" (hasta el 2015 se autoescribía el nick de un usuario al cliquearlo)."
	}, {
		"f": "Dejen de hablar de Chuck o los baneo.",
		"a": "sefirok",
		"e": "A veces hablaban mucho de Chuck Norris en el chat, y a sef le molestaba de verdad."
	}, {
		"f": "Soy la profeta del coolsismo.",
		"a": "3lite",
		"e": "Elite, copiándose de Wig con el 23."
	}, {
		"f": "¡Soy el profeta del 23!",
		"a": "Wigazo",
		"e": "Una de las clásicas frases veintitreseanas de Wig. Por un tiempo su nick fue \"Wigazo [23's Prophet]\"."
	}, {
		"f": "Elite, eres muy obvia.",
		"a": "MXS",
		"e": "Algunas veces se lo ha dicho..."
	}, {
		"f": "¡No soy Wigzago o Wizago, soy Wigazo!",
		"a": "Wigazo",
		"e": "Muchas veces le tuvo que insistir esto a juaner. Después se queja de que le dicen \"Juanes\". También le llamaba \"Wiz\""
	}, {
		"f": "¿Por qué no hablan de mí? <img src='http://illiweb.com/fa/i/smiles/icon_sad.gif'>",
		"a": "juaner",
		"e": "Cuando juaner ve que en el chat no están hablando de él, no le gusta nada."
	}, {
		"f": "¡ODIO EL ROSA!",
		"a": "3lite",
		"e": "Elite solía mostrar un rechazo a lo \"femenino\"."
	}, {
		"f": "¡AMO EL ROSA!",
		"a": "LolipopElite",
		"e": "LolipopElite es una personalidad alterna de Elite, femenina y cursi, muy opuesta a lo que es."
	}, {
		"f": "(CyG) Wigazo [JDF] tienes algun problema con migo que cada vez que hablo me haces la contra como si me tuvieras rencor",
		"a": "5m0okt",
		"e": "En la <a href= 'http://www.sporepedia2.com/t916p2-segunda-reunion'>segunda reunión</a> Wig se mostraba totalmente en contra de que ascendieran a 5m0okt a Moderador, sólo porque antes de su ausencia había sido Mod Jr. Wigazo decía que antes debía ser colaborador, además, el cargo de Moderador le pertenecía a Elite. De todos modos, Smoot exageraba un poco. 5m0okt pasó a ser odiado por todosn por ser un plagiador de creaciones,"
	}, {
		"f": "Amenazaste con hakear el foro. ¿Disculpa? ¿Cómo lo harás? ¿Con raymans?",
		"a": "3lite",
		"e": "Winslow, un fanático de Rayman, dijo una vez ser baneado injustamente. Al parecer amenazó con hackear al foro, y Elite dijo esto. "
	}, {
		"f": "No me importa lo del foro, nadie aquí es tan estúpido como para creerlo, bueno, nadie salvo Plaxaris92",
		"a": "3lite",
		"e": "Al hacer la broma del segundo aniversario del foro, 3lite dijo esto en el chat en presencia del mismo Plaxy. Al final se equivocó, muchos cayeron en ella."
	}, {
		"f": "no te juntes con esa chusma",
		"a": "dekarserverbot",
		"e": "Una de las tantas frases del Chavo por parte de dekar, esta de Doña Florinda."
	}, {
		"f": "mala cosa mala cosa",
		"a": "juaner",
		"e": "Cuando juaner anuncipo los ganadores de los primeros Juegos Forísticos, dekar dijo \"<a href= 'http://www.sporepedia2.com/t2908-finales-ganadores-de-los-juegos-foristicos#52929'>boooo arbitros calenturientos</a>\", a lo que juaner respondió con esta frase."
	}, {
		"f": "y conoci al presidente de los estados unidos OTRA VEZ",
		"a": "dekarservertbot",
		"e": "Esta frase la usa cuando pasa algo \"OTRA VEZ\". La sacó de la película Forrest Gump. El primer uso que lo hizo en el foro fue el 10 de diciembre del 2010. Hizo un tema llamado \"<a href= 'http://www.sporepedia2.com/t1235-impongo-la-moda-otra-vez-y-conoci-al-presidente-de-los-estados-unidos-otra-vez'>Impongo la moda otra vez, y conoci al presidente de los estados unidos otra vez</a>\" en el que decía que muchos usuarios usaban como avatar criaturas similares a la suya. Sefirok cerró el tema y lo mandó a la papelera \"por tiempo y porque no aporta nada al foro\"<br>Esto del presidente de los EE.UU. se ha convertido en todo un meme en el foro."
	}, {
		"f": "a todos os gusta demasiado el sexo y creo que la unica que lo ha orivadi es arwen",
		"a": "Kokodrilo",
		"e": "Frase épica dicha por Koko en el chat. Gracias a ella, se popularizó el término \"ORIVADI\", aunque sólo había sido un error de tipeo (\"probado\"). ORIVADI se ha convertido en un dios, así como YUBO, otro error de tipeo (\"yuno\" del smile).<br>Una gran porción de la cultura forística se ha desarrollado en torno a este dios, volviéndose muy popular aunque no del agrado de todos. Una obra destacada de este movimiento verde y bizarro es <a href= 'http://www.sporepedia2.com/t13037-chorifug-tales'>Chorifug Tales</a>."
	}, {
		"f": "¿Qué hay si Dumdon quiere ser chico? ¡Yo te protegeré pequeño Dumdon!",
		"a": "Razor",
		"e": "Este cool suceso tuvo su respectivo lugar en el afamado chat. En esa ocasión se encontraban conectados Ghost, Razor, Andalaosa, Dumdon y 3lite. Cuando 3lite le cambió el género a Dumdon (costumbre que tenía con los usuarios en una época, molesto para algunos), por uno masculino, ella se largó a llorar. Por mera compasión, Ghost dijo esto:<br>\"Yo te protegeré pequeña Dumdon\"<br>En respuesta a eso y en parte burla, Razor dijo lo citado.<br>\"Elite jamás me cambiaría el género a mi\" había pronunciado en esta época Dum, antes de ser víctima en este suceso."
	}, {
		"f": "¡No quiero estar ausente!",
		"a": "Andalaosa",
		"e": "Típica frase de esta singular usuaria cuando no quiere figurar ausente en el chat."
	}, {
		"f": "¡¿Dónde está Xhaps?! ¡Debo decirle que será padre!\",\"¿Dónde está mi esposa muerta? ¡Quiero decirle que quiero que sea madre!",
		"a": "3lite y Razor",
		"e": "En el chat se habla mucho de la \"<a href= 'http://www.sporepedia2.com/t6980-novela-mexicana-rol-2-0'>Novela Mexicana 2.0</a>\", esta ha sido una de las cools frases dichas."
	}, {
		"f": "Carajo!",
		"a": "GhOsT",
		"e": "Exclamación que de vez en cuando soltaba el fantasmista sexy. Por cierto, este apodo se lo dio 3lite cuando acostumbraba cambiar el género de los perfiles de los usuarios. Luego de cambiárselo a GhOsT, se lo cambió a todo el staff. Luego siguió con el humor de Ghost, le agregó infracciones estúpida, cambió su localización y comentarios, y estuvo a punto de cambiarle el avatar."
	}, {
		"f": "¡No me interrumpas, estoy hablando con mi esposa muerta! <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1091117066.png'>",
		"a": "Razor",
		"e": "Razor haciendo su papel de la \"<a href= 'http://www.sporepedia2.com/t6980-novela-mexicana-rol-2-0'>Novela Mexicana 2.0</a>\"."
	}, {
		"f": "hay yo hoy vi unas botas en oferta, divinas! Pero mi novio Rozart no me las quiso comprar, asi que termine con el",
		"a": "Razor",
		"e": "omentario sumamente cómico de Rosita, Rosa, Rosyy, el afamado personaje de Razor en la noche de locas.<br>La <a href= 'http://www.sporepedia2.com/t6975-rosii-plazhyy-myssyyy-y-elityy'>noche de locas</a> es una joda-juego que fue creada para burlarse de aquellas mujeres... \"escorias y materialistas\", según 3lite."
	}, {
		"f": "SPAAAAAACE!!!!!",
		"a": "Razor",
		"e": "Razor es conocido como el núcleo del espacio de Portal 2, ya que ha usado varios avatares con él. Prácticamente lo representa. Y su frase también."
	}, {
		"f": "Estúpido y sensual {USERNAME}",
		"a": "Razor",
		"e": "Razor suele usar esta frase <a href= 'http://www.youtube.com/watch?v=Fz357DjsvU4'>sacada de Los Simpsons</a>."
	}, {
		"f": "PROTESTO",
		"a": "dekarserverbot",
		"e": "Frase muy usada por dekar, en especial durante las discusiones."
	}, {
		"f": "TENGO DERECHO A DESCREER Y A EXPRESARLO, ESO NO ES INSULTAR",
		"a": "JoseGarcia",
		"e": "Todo empezó en el tema \"<a href= 'http://www.sporepedia2.com/t7483-anti-entrevistas'>Anti-entrevistas</a>\", cuando José llama mentiroso a Wig porque no le creía que tenía en mente entrevistar a Salvador, a lo que Wig, ofendido, respondió agresivamente. Luego, en el chat, José se mostraba enojado por haber sido insultado, porque supuestamente nunca había llamado mentiroso a Wig. Aunque parece bastante claro que <a href= 'http://www.sporepedia2.com/t7483p48-anti-entrevistas#146712'>así fue</a>, una forma no directa de llamar mentiroso a alguien. Pero José dice que decir que no creés en la palabra de alguien, no es lo mismo que llamarle mentiroso... Y en la frase, repetida 8 veces en el chat, habla como si Wig le negara el derecho de no creerle, cosa totalmente incorrecta, como se lo dijo Wig varias veces."
	}, {
		"f": "Y si no, HAY TORRETA!",
		"a": "Tomás Kapo Spore 2011",
		"e": "Normalmente utilizada cuando hablaba con Vinnie Sift si quería que hiciera o dijera algo. Una frase clásica de El Jefe de Ayuda Mundial, unas machinimas de Halo, en el que un psicópata desquiciado que odia al protagonista, llamado Oscar (Y encima TKS decía que Vinnie es este Oscar) y utiliza este castigo por cualquier cagada que se mande Oscar.<br>Suele estar acompañado con un \"Tomas Kapo Spore 2011 persigue a Vinnie con una torreta.\""
	}, {
		"f": "ROLEA TU FUKING IMPERIO",
		"a": "Vinnie Sift",
		"e": "Solía decirlo cuando se encuentraba con TKS en la Chatbox, refiriéndose a su popular juego de rol."
	}, {
		"f": "mmm",
		"a": "Kokodrilo",
		"e": "Usada para romper el silencio en la ChatBox."
	}, {
		"f": "Yo quiero mi penechorizo <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/2312010866.png'>",
		"a": "DigiDSoul",
		"e": "Comentario de Digi al saber que se <a href= 'http://www.sporepedia2.com/t10493-el-sporn-en-el-foro'>censuraría el Sporn</a> en el foro, incluyendo el regalito de Arwen."
	}, {
		"f": "Cosas japonesas... <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1149863413.png'>",
		"a": "Mx3brainpower",
		"e": "Cuando comenzaban a hablar en japonés o de temas otakus, Mx3 solía reaccionar de esa manera."
	}, {
		"f": "Hola baldosa caminante!",
		"a": "Vinnie",
		"e": "Saludo de Vinnie a Andalaosa. Es una versión de Anda La Losa que es una \"confusión n00b\"."
	}, {
		"f": "Dumdom, tu no puedes ni armar dos frases en japonés...",
		"a": "Xhaps",
		"e": "Ocurrió en la Navidad de 2012, cuando Dum empezó a \"darle lecciones\" de japonés a DARKIgneous. Xhaps la frenó con esa frase."
	}, {
		"f": "Qué tal?",
		"a": "Mx3brainpower",
		"e": "Siempre que entraba alguien al chat, Mx3 lo saludaba así."
	}, {
		"f": "Tanto hablar de comida mi dio hambre y me fui a preparar el sesayuno.",
		"a": "Mx3brainpower",
		"e": "Un error de tipeo de Mx3 hizo creer a lo usuarios del ChatBox que sus desayunos consisten en cerebros, y por eso el \"brain\" de su nick:<br><br>[09:36:04] @ Mx3brainpower : Tanto hablar de comida mi dio hambre y me fui a preparar el sesayuno.<br>[09:36:21] Surten de Soita III : lol<br>[09:36:39] @ Mx3brainpower : desayuno* <a href= 'http://r16.imgfast.net/users/1615/20/07/68/smiles/2091913784.png'></a><br>[09:36:43] @ Andalaosa : Sesayuno <a href= 'http://r16.imgfast.net/users/1615/20/07/68/smiles/3377653495.png'></a><br>[09:36:58] Surten de Soita III : es un zombie <a href= 'http://r16.imgfast.net/users/1615/20/07/68/smiles/3377653495.png'><br>[09:37:03] Surten de Soita III : come sesos <a href= 'http://r16.imgfast.net/users/1615/20/07/68/smiles/3377653495.png'></a><br>[09:37:05] @ Mx3brainpower : Es que desayuno sesos <a href= 'http://r16.imgfast.net/users/1615/20/07/68/smiles/3377653495.png'> (?)<br>[09:37:29] Surten de Soita III : xD<br>[09:37:32] @ Mx3brainpower : No me dicen BrainPower por nada (?)<br><br>Se lo molestó con la frase por un tiempo, Wig hacía bromas en algunas presentaciones (<a href= 'http://www.sporepedia2.com/t11200-hoooooola-a-todos-soy-rex-p#218903'>1</a>, <a href= 'http://www.sporepedia2.com/t11239-hola-d#219820'>2</a>, <a href= 'http://www.sporepedia2.com/t11279-hola-como-estan#220755'>3</a>) y en una <a href= 'http://www.sporepedia2.com/t7069p496-hombre-lobo#218946'>narración de Hombre Lobo</a>."
	}, {
		"f": "como dice nuestro nada poderoso amigo esto es spam puro",
		"a": "dekarserverbot",
		"e": "Por el nick de Mx3brainpower, dekar lo llama así a veces."
	}, {
		"f": "Pesadilla Fuera",
		"a": "pesadilla",
		"e": "Pesa la usa al final de la muchos de sus temas o mensajes para cerrarlos, o también para despedirse en el chat."
	}, {
		"f": "El Silencio... <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/221995.gif'>",
		"a": "Alegorn",
		"e": "La usaba en el chat cada vez que nadie habla por más de un minuto."
	}, {
		"f": "Rammu {USERNAME}",
		"a": "Alegorn",
		"e": "Es la forma en que saludaba Ale cuando entrabas al chat."
	}, {
		"f": "Me voy a comer :/ PERO NO PALOMAS ¬¬",
		"a": "Razor",
		"e": "Cuando Razor le dijo a Arwen que era de Perú, dijo: \"Y NO, No como palomas ¬¬\", y ella le contestó \"Prrú, prrú. Soy una paloma, cómeme\". Después de sus <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/96795.gif'> dijo: \"En realidad esta conversación me dio hambre\"."
	}, {
		"f": "Sólo una cosa dekar... ¿Hay algo para ti que no sea arenoso, castroso, aburrido, amargado o llorón?",
		"a": "Arwen",
		"e": "Se lo dijo por <a href= 'http://www.sporepedia2.com/t10791p48-dia-internacional-de-la-mujer-dim#212754'>un comentario en su tema del Día Internacional de la Mujer</a>. Wigazo respondió por él: \"Sí, de hecho, hay una cosa: Él mismo. <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/2091913784.png'> Lo más gracioso es que nadie coincide con él en esto. <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/197225.gif'>\""
	}, {
		"f": "¿Dónde está ese perro con mi café?",
		"a": "Imperatrum DG",
		"e": "Frase que decía mucho en el chat."
	}, {
		"f": "¿Con \"tú\" te referías a mí?",
		"a": "DigiDSoul",
		"e": "Fail de Digi, porque era obvio:<br><br>DG: Iremos tú, Totoi, Samu, Emd y yo.<br>Digi: Y yo que? D:<br>DG: Tú eres el prmiero <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/3934600037.png'><br>Digi: Ah! ¿Con \"tú\" te referías a mí?"
	}, {
		"f": "está de spora madre",
		"a": "Josgrox",
		"e": "La usó algunas veces para calificar creaciones."
	}, {
		"f": "Si no era por un meteoro, ahora seguiríamos usando computadoras, pero nuestras madres no nos mentirían cundo dicen que salimos de un huevo. <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1459140577.png'>",
		"a": "Vinnie Sift",
		"e": "En el tema <a href= 'http://www.sporepedia2.com/t9401p32-cefalo-sapiens-real'>Cefalo Sapiens... Real</a>, se propone que, tal vez, los cefalópodos podrían ser una especie Sapien en algún futuro. Koko dice que eso es imposible por que los mamíferos dominamos la tierra. Vinnie dice que eso es una idiotez y, entre otras cosas, dice esto. Koko fue derrotado y no volvió a comentar."
	}, {
		"f": "Arwen ,se tu nombre y apellidos ,te llamas MARÍA DOMÍNGUEZ",
		"a": "Lechuza",
		"e": "Lechu lo dijo en el chat, aunque no es cierto que sea el nombre de Arwen."
	}, {
		"f": "Odio esto esto es solo Basura!! Aquí solo hay BASURA",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Los moderadores son tontos estúpidos e imbeciles, hay un tal otro que es un orto y un fantasma gordo de mierd*",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Elite es una tonta come café de mierd* y MXS una tortuga retrasada",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "KB es una gorda que no cabe en mi armario y TKS es un pene",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Totoi es un cabrón y me chupa la almeja además todo esto es mied* pura mierd*a sois caca",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Dark es un put* Bob de mierd*, jony es una mierd* de mierd* de dinosaurio",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Wig es un cabrón de mierd* que me obliga a comer cucarachas",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Razor es un put* espacial de mierd*",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Xhaps se pasa el dia comiendo vacas de mierd*",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "SO ES UN SOSO",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Juaner una put* zorra!!!!!",
		"a": "DigiDSoul",
		"e": "Una de las tantas épicas frases que Digi tuvo que decir <a href= 'http://www.sporepedia2.com/t7191-odio-el-foro-post-en-broma'>en un post</a> para cumplir un reto."
	}, {
		"f": "Me encanto! <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1685507807.gif'>",
		"a": "Costi850",
		"e": "La dijo en 54 temas, para acumular mensajes, lo que le contó como <a href= 'http://www.sporepedia2.com/u10515'>infracción</a>."
	}, {
		"f": "El freedom no quita imaginación, sino que te quita los límites de la imaginación. <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1889348728.png'>",
		"a": "Wigazo",
		"e": "Muchos usuarios odian a muerte el freedom porque creen que usando este cheat, hacés maravillas sin esfuerzo. En realidad, esto se debe a dekar, quien impuso este pensamiento. Como las masas suelen, a veces, seguir las ideas de dekar, muchos tienen esta forma de pensar. Sin embargo, se ha estado tratando de dejar de lado este pensamiento, como cuando Wig <a href= 'http://www.sporepedia2.com/t11423-necrolium#223270'>ijo la frase</a>."
	}, {
		"f": "Dark Injection  <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1149863413.png'>",
		"a": "Medio foro",
		"e": "Al igual que con el freedom, muchos usuarios odian el mod Dark Injection porque creen que hace maravillas sin esfuerzo. Si bien, en parte puede ser cierto, no se puede negar que también se puede usar de verdad bien, así que no en todos los casos te hace todo el trabajo."
	}, {
		"f": "Apoyo enérgicamente esta propuesta.",
		"a": "Imperatrum DG",
		"e": "DG lo decía muy seguido al estar de acuerdo con una sugerencia."
	}, {
		"f": "ARGUEN Y DARKARSERVERBOT NO ESTAN DISCUTIENDO EN EL CHAT. ES... MI REGALO DE CUMPLEAÑOS?",
		"a": "Razor",
		"e": "Arwen y Dekar solían discutir en el chat, por eso Razor dijo eso."
	}, {
		"f": "No puedo hablar sin faltas *challenge denied*\",\"lla ce me bolo la cabetha <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/3021747972.png'>",
		"a": "Mx3brainpower",
		"e": "Digi y Arwen estaban diciendo faltas ortográficas a propósito en el chat. Mx3 se negaba, pero inmediatamente después cometió este terrible accidente ortográfico."
	}, {
		"f": "adios dessgradecifos incredulos\",\"lo siento me equibocado estoy con el movil",
		"a": "julia911",
		"e": "Lo primero lo dijo luego de estar media hora en el chat sin decir nada. Luego, volvió a entrar y dijo lo segundo, y se fue de nuevo. A Samu le hizo mucha gracia."
	}, {
		"f": "bueno,es solo un juego,no todos piensan igual que tu",
		"a": "Rhinestone",
		"e": "Rhine creó un juego en el que Totoi dijo \"<a href= 'http://www.sporepedia2.com/t11782-el-mejor-potato-spagetto#230433'>Que gilipollez..</a>\", y el creador le contestó con esa frase. Sin embargo, Totoi fue citado por varios usuarios, dejando a Rhine en una posición bastante incómoda."
	}, {
		"f": "*Lanza una pezuña a Cora*",
		"a": "Wigazo",
		"e": "Wig suele nombrar a TKS como Cora, o vaca nazi, debido a los comerciales de la leche chocolatada de Sancor, donde la vaca Cora habla con acento Cordobés, ya que TKS es Cordobés. Lo de la pezuña es por <a href= 'https://www.youtube.com/watch?v=L1hit2mAPkE'>este comercial</a>, y lo de vaca nazi, es porque Wig tiene dos evidencias irrefutables para acusarlo de esa ideología (<a href= 'http://i1.ytimg.com/vi/UFLgK-qkWgI/hqdefault.jpg'>ésta</a> y <a href= 'http://www.derf.com.ar/imgnoticias/derf.com.ar_250206_2722009_0256228B.jpg'>ésta</a>)."
	}, {
		"f": "Si no mejoras tu ortografía, mi ojos lloraran letras",
		"a": "Lechuza",
		"e": "La usó una vez en el chat. Un nuevo escribía todo con \"k\" y en vez de \"qué\" decía \"q\". Lechuza odia eso, y por eso odiaba a Fede."
	}, {
		"f": "qe tiene de malo hablar cn faltas de ortografia? ustedes sn muy viejos, actualizence a la era moderna chotos",
		"a": "Hell Goblin",
		"e": "En la discusión que surgió con Fede, cuando Lechu sugirió su frase, Stranger dijo esto, a lo que Arwen respondió: \"¿Qué tiene que ver hablar con faltas con ser moderno? ¿Para ser moderno hay que ser retrasado? <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/338702.gif'>\""
	}, {
		"f": "[Soy feo, pero soy muy suave. Mp3] <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/3234167965.png'>",
		"a": "Espía chino",
		"e": "De acá surgió el smiley chino, un gran protagonista de nuestro foro. Toda una historia cubierta en <a href= 'http://www.sporepedia2.com/t12177-el-periodico-de-mr-s2-5-edicion#237598'>la quinta edición del Periódico de Mr. S2</a>. Su fama se intensificó al ser lucido en el banner de San Besuquitos y también cuando estuvo en el widget de últimos temas, siendo el \"cargando\" cuando lo actualizás, conocido como el \"mini chino\" en este caso."
	}, {
		"f": "Lechuza,yo se lo vi a mi perro,no tengo dinero para comprarle un calzonsillo",
		"a": "Hell Goblin",
		"e": "Lo dijo Goblin a Lechuza durante un test sobre genitales y la pregunta fue:<br>\"¿Le has visto alguna vez el genital a un hombre que no seas tú o alguien de tu familia?\""
	}, {
		"f": "Se remueve la censura a pedido de los usuarios mal hablantes",
		"a": "Mx3brainpower",
		"e": "Mx3 estuvo siempre muy a favor de la censura. Fue por eso que ejecutó su \"Plan Maligno\" que tapó todo el foro, dejándolo inaccesible para los usuarios. Wig era el único Admin además de él (quien se auto echó luego de efectuada la acción), y no planeaba entrar por un tiempo por haberse mudado. Sin embargo, en ese momento pudo entrar, y salvó la situación."
	}, {
		"f": "No se juzga a un foro por su DG. <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/1889348728.png'>",
		"a": "Wigazo",
		"e": "DarkOus estaba haciendo una <a href= 'http://www.sporepedia2.com/t12458-amigos-admin#242592'>crítica al staff</a>, donde ciertas acusaciones solo pudo evidenciar con casos de DG, por eso Wig le respondió terminando con esta épica frase."
	}, {
		"f": "DEFINITIVAMENTE,puedo declararte como el usuario que capta menos sarcasmo que un sofa",
		"a": "Rhinestone",
		"e": "En el chat, Victor preguntó como podía conseguir una @, y DG le dijo \"Tienes que mandarle un código a Wig y te hará Admin. Pero te lo paso por MP, que es secreto\", entonces fue y le preguntó a Emd por el código."
	}, {
		"f": "PITUFOS MALNACIDOS",
		"a": "Totoi",
		"e": "Totoi estaba con Digi en el Digimundo, un foro de pruebas, probando nuevas fórmulas para deformar el chat. En una que Totoi diseñó, salía una especie de cuadrado verde extraño, que si lo arrastrabas a la barra de pestañas, te abría una página con caracteres extraños, rollo letras con los dos puntos y tal, pero el icono de la página era el pitufo jefazo, el de la boina roja. Digi y Totoi se partieron el culo, y cuando fallaba una fórmula decía eso de \"PITUFOS MALNACIDOS\", pues con su magia pitufliza iban en contra de los teoremas orivadenses. "
	}, {
		"f": "Como te hago un hijo?",
		"a": "Bato",
		"e": "Stranger le pidió a Bato que le hiciera un hijo, prometiéndole que pagaría el aborto. Stranger respondió con un \"lol\" a lo que Bato insistió \"Pero como lo hago!!\"."
	}, {
		"f": "pork me nombras a mi?",
		"a": "N00b víctima del USERNAME",
		"e": "Ya muchos conocemos el típico caso del n00b que no conoce el código {USERNAME} y piensa que de verdad lo están nombrando cuando lo usan (el código muestra el nick de quien lo lee)."
	}, {
		"f": "me han dicho escroto de cabra... me voy del foro para siempre, antes esto era un refugio para mi, pero ahora todo se trata de escrotos. Dejare el foro por que se esta pudriendo por esto...",
		"a": "dekarserverbot",
		"e": "Dumdon <a href= 'Dumdon insultó a dekar, y él se lo tomó muy en serio. :S'>insultó a dekar</a>, y él se lo tomó muy en serio. :S"
	}, {
		"f": "Cambiemos de Conservación",
		"a": "Lechuza",
		"e": "Un error de tipeo, cuando todos hablaban de B&W de Pokémon. Varias veces escribió así esa palabra."
	}, {
		"f": "Me gusta el helado",
		"a": "Dumdon",
		"e": "Dumdon, la fanática de los helados..."
	}, {
		"f": "SIGUE MEJORANDO",
		"a": "Eduardochifull",
		"e": "Frase típica de Eduardo cuando comentaba creaciones, muchas veces acompañada de un meme random o smiley."
	}, {
		"f": "El miembro '{USERNAME}' ha efectuado la acción siguiente: Lanzar Dados",
		"a": "El Señor de los Dadillos",
		"e": "Frase que utiliza cada vez que alguien utiliza sus dados."
	}, {
		"f": "EPILEPSIAAAA SENSUAL",
		"a": "Lechuza",
		"e": "Lechuza puso un <a href= 'https://www.youtube.com/watch?feature=player_embedded&v=v9KNs7SXfMI'>video</a> en el chat y dijo esta frase, cuando en realidad, en vez de \"SENSUAL\", quiso decir \"SENSORIAL\"."
	}, {
		"f": "Sol puedo decir",
		"a": "julia911",
		"e": "Frase que se ha ganado el odio de muchos, la usaba prácticamente en todos sus mensajes."
	}, {
		"f": "Más que ofendido deberías sentirte glorificado por tu anomalía cerebral",
		"a": "Xhaps",
		"e": "Parte de una <a href= 'http://www.sporepedia2.com/t12727p16-me-voy-creo-que-para-siempre#246826'>épica respuesta</a> de Xhaps a Bato."
	}, {
		"f": "HEY BATO, PORQUE NO TE CREAS UN CEREBRO EN POWERPOINT? A VER SI LO LOGRAS!!",
		"a": "Ajo",
		"e": "Parte de una <a href= 'http://www.sporepedia2.com/t12727p16-me-voy-creo-que-para-siempre#246861'>épica respuesta</a> de Ajo a Bato."
	}, {
		"f": "Todos pueden encontrar amistades en la S2 <img src='http://illiweb.com/fa/i/smiles/icon_wink.gif'>, hasta Bato <img src='http://illiweb.com/fa/i/smiles/icon_wink.gif'>",
		"a": "Mx3brainpower",
		"e": "Mx3 lo dijo para <a href= 'http://www.sporepedia2.com/t12727-me-voy-creo-que-para-siempre#246780'>calmar a Santi</a> y, de paso, burlarse de Bato."
	}, {
		"f": "Se que te desconectaras",
		"a": "Rhinestone",
		"e": "Rhine quiso predecir que TKS se desconectaría del chat por estar afk, así que dijo eso, pero <a href= 'http://www.sporepedia2.com/t6533p496-frases-celebres-del-foro#278305'>dos segundos después</a> de que TKS se fuera."
	}, {
		"f": "no, no me desconectará",
		"a": "La Máscara",
		"e": "Lo decía generalmente cuando se queda ausente en el chat."
	}, {
		"f": "\"POR LA LIBERACION DE MAURI\" (?",
		"a": "Wigazo",
		"e": "La primera de las campañas de liberación, como <a href= 'http://i1275.photobucket.com/albums/y460/Wigazo4/liberacionMx3_zps314d7263.png'>la de Mx3</a> y <a href= 'http://i1275.photobucket.com/albums/y460/Wigazo4/liberacionSalchicha_zps28fcca5d.png'>la de Salchicha</a>.<br>Ésta surgió en el chat, cuando Razor y Wig hablaban con mauriciorebollo para que leyera las reglas y comenzara a comportarse. Él prometió que lo haría, así que tiró esa frase y comenzó la campaña en su expediente con el staff. Luego vio que Mauri estaba en el subforo de reglas, así que creó <a href= 'http://i1083.photobucket.com/albums/j391/Wigazo/reglasCebolla.png'>una firma</a> para que todos la usaran."
	}, {
		"f": "mira el lado bueno, podrás regodearte de que has sido baneado del foro más cool de toda la web",
		"a": "Razor",
		"e": "Se lo dijo a Mauri cuando conversaba con Wig sobre su mal comportamiento y fue convencido de respetar las reglas."
	}, {
		"f": "Todos los artistas odian sus creaciones... Por que, por mas que la gente diga que esta bueno, en el fondo de su corazon, el artista sabe la verdad... Que es una reverenda cagada....",
		"a": "Vinnie Sift",
		"e": "Según Xhaps, esto es una verdad."
	}, {
		"f": "Spore Sam es sexy como el culo de MasterJ",
		"a": "Lechuza",
		"e": "Lechuza tenía que retar a Sad de hacer algo: \"Ponte de humor: Spore Sam es sexy como el culo de MasterJ\". Sad le pidió que se lo repita, y eso hizo, permitiendo que Sad lo trolleara poniendo en su humor \"[20:43:48] Lechuza : Spore Sam es sexy como el culo de MasterJ\"."
	}, {
		"f": "felicidades, PERO VALE... Y ESTE SEÑOR QUIEN ES!?!?!?!?!?!?!?",
		"a": "dekarserverbot",
		"e": "<a href= 'http://www.sporepedia2.com/t3349-manana-cumpleanos-de-traz#62550'>Épica frase</a> de dekar."
	}, {
		"f": "@ : v",
		"a": "Fantasma de TKS",
		"e": "Durante una kick war de TKS contra J, en pleno proceso hubo un extraño bug en el chat, TKS pateó a J y en lugar de figurar su nombre el mensaje salió con una \"@\" naranja e invisible:<br>[22:31:35] @ : v - Tomás Kapo Spore 2011"
	}, {
		"f": "Ven que se parece al RTI?",
		"a": "Mur-mai-der",
		"e": "Mur creó un <a href= 'http://www.sporepedia2.com/t14981-mundo-rol-libre-renacen-las-tierras'>juego de rol</a> que era una copia de Rolea Tu Imperio, donde en las FAQ, que estaban en spoiler como las de RTI, había una pregunta que decía \"¿En RTI existen turnos?\" delatando la obvia copia del post de RTI."
	}, {
		"f": "PUMBA INFRACCIÓN EN TODA LA BOCA!",
		"a": "Blood",
		"e": "<a href= 'http://www.sporepedia2.com/t15541-nueva-galaxia-segunda-oleada#301266'>Agresión</a> de la cual se arrepintió."
	}, {
		"f": "Eso es todo camaradas. <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/2633111661.gif'>",
		"a": "Glumyglu",
		"e": "Glumy utiliza mucho esa palabra con sus amigos en joda, por ser comunista, y la empezó a usar en FDF, en la <a href= 'http://asistencia.foroactivo.com/t144215-no-mas-uso-de-expresiones-que-se-puedan-tomar-como-sarcasmo-en-la-moderacion'>sugerencia de Wig sobre el sarcasmo</a> haciendo que los demás lo imitaran. El staff de allí odia a los usuarios de este foro gracias a eso, Asterix ya lo dejó en claro, según él, van a joder allá por aburrirnos de nuestro foro. Y prometió que si seguían, él también empezaría a jugar."
	}, {
		"f": "¡Por la Revolución del Quijote! <img src='http://r16.imgfast.net/users/1615/20/07/68/smiles/2633111661.gif'>",
		"a": "Los camaradas haciendo la revolución en FDF",
		"e": "En una <a href= 'http://asistencia.foroactivo.com/t144215-no-mas-uso-de-expresiones-que-se-puedan-tomar-como-sarcasmo-en-la-moderacion'>discusión en FDF</a>, Jucarese, uno de los administradores, le decía a Wig que no se hiciera el quijote de los usuarios. Después Wig vio en otra discusión de un tema de \"Fibo\", donde lo criticaba por su forma de escribir. Juca decía que tenía problemas de vista, y no iba al foro a escribir el Quijote. "
	}, {
		"f": "Ban Ban Ban!",
		"a": "Staff",
		"e": "Cuando alguien comete una infracción, esto es lo que propone el Staff (según fuentes cuestionables)."
	}];

	var fraseRandom = Math.floor(Math.random() * frases.length);
	$("#frase-celebre").html('<i>"' + frases[fraseRandom].f + '"</i> - ' + frases[fraseRandom].a);
	$("#frase-celebre").click(function() {
		$('<p title="Explicación de la frase"><strong>' + $("#frase-celebre").html() + '</strong><br>' + frases[fraseRandom].e + '</p>').dialog({
			width: 500,
			draggable: true
		});
		return false;
	});
});
