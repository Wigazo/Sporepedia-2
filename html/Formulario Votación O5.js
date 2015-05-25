<!--
    Título: Formulario Votación O5
    ¿Deseas utilizar la parte alta y la parte baja de la página de tu foro? No
    ¿Utilizar esta página como índice? No
-->
<html>
	<head>
        <meta charset='utf-8'> 
		<link rel="stylesheet" type="text/css" href="77-ltr.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.min.js" type="text/javascript"></script>
		<link href="http://code.jquery.com/ui/1.10.2/themes/vader/jquery-ui.min.css" rel="stylesheet" id="ui-theme">  
		<script>
			var categorias =
                        [{
                            "categoria": "Aventura",
                            "creaciones": [{
                                "img": "http://i.imgur.com/6GIcj2F.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17285-la-tortuga-justiciara-del-dr-breincox-creed-o5"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Spore_23-04-2015_17-18-41_zpshuqmcjb8.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17424-un-enemigo-desconocido-cap-1-o5"
                            }, {
                                "img": "http://i.imgur.com/qOxoJwF.jpg",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17429-la-aventura-western-saga-de-aventuras-o5"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Spore_12-05-2015_19-06-06_zpsa9yfa4or.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17635-una-noche-obscura-o5"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Spore_16-05-2015_21-25-03_zps2wtd0zsz.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17681-dragons-y-cats-o5#344172"
                            }, {
                                "img": "http://i.imgur.com/fR1HZO7.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17737-panic-in-bakur-o5"
                            }, {
                                "img": "http://i1288.photobucket.com/albums/b486/Alegorn6/Agua%20para%20el%20Sediento%202_zpsfobw54jy.png",
                                "nick": "Alegorn",
                                "url": "http://www.sporepedia2.com/t17755-agua-para-el-sediento-o5#344817"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Imagenes%20SPORE/Spore_17-05-2015_17-11-52_zpstbgpb8rr.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17756-heist-i-o5"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/05/spore_23-05-2015_17-50-42.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17762-senal-en-el-quer-o5"
                            }, {
                                "img": "http://i.imgur.com/x90LdHd.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17761-el-quiere-salir-o5"
                            }]
                        }, {
                            "categoria": "Criatura",
                            "creaciones": [{
                                "img": "http://i1269.photobucket.com/albums/jj590/Rayzpook/Nineo_zpscs2i93dj.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17231-nineo-o5"
                            }, {
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Draconante.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17287-una-especie-de-dragon-o5"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Walrus%20Ushibaccedilk%203_zpsekbeka1l.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17644-warlus-ushiback-o5#343844"
                            }, {
                                "img": "http://i.imgur.com/UrdX3TB.png",
                                "nick": "zasentodalaboca10",
                                "url": "http://www.sporepedia2.com/t17319-d3sigmax2-o5"
                            }, {
                                "img": "http://i1318.photobucket.com/albums/t651/bgc1232/Gean_zpsb7939946.png",
                                "nick": "bgc123",
                                "url": "http://www.sporepedia2.com/t17300-gean-o5"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/dioneacutee_zpsogihuico.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17276-dionne-o5"
                            }, {
                                "img": "http://static.spore.com/static/thumb/501/009/883/501009883795.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17262-gorgeousaviso5"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Soulbirds_zpsmvp0irqx.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17274-soulbird-o5"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/Albus_zps00f55c87.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17241-albus-o5"
                            }, {
                                "img": "http://i.imgur.com/MHHUpQr.png",
                                "nick": "DaALTF4!",
                                "url": "http://www.sporepedia2.com/t17369-hardymano5"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/03/zul.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17392-zul-o5"
                            }, {
                                "img": "http://i.imgur.com/d49KOyv.png",
                                "nick": "Xhaps",
                                "url": "http://www.sporepedia2.com/t17445-egorbado-o5"
                            }, {
                                "img": "http://i.imgur.com/saecOOa.png",
                                "nick": "julia911",
                                "url": "http://www.sporepedia2.com/t17545-karenfi-terk-o5#343697"
                            }, {
                                "img": "http://i.imgur.com/e9vmqaz.png",
                                "nick": "linkplay",
                                "url": "http://www.sporepedia2.com/t17639-carnibulo-o5#343776"
                            }, {
                                "img": "http://i.imgur.com/0xErk0h.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17640-nidogh-el-carronero-errante-o5#343786"
                            }, {
                                "img": "http://i1301.photobucket.com/albums/ag111/SheridanStar/Spore/Originals/Double%20Team.png",
                                "nick": "CarrotCube",
                                "url": "http://www.sporepedia2.com/t17642-double-team-o5#343795"
                            }, {
                                "img": "http://i.imgur.com/NKPzsUm.png",
                                "nick": "Dororo",
                                "url": "http://www.sporepedia2.com/t17702-mantis-diabolica-o5"
                            }, {
                                "img": "http://i.imgur.com/lxNJKTe.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17730-equidont-o5#344638"
                            }, {
                                "img": "http://i.imgur.com/r81ryuD.png",
                                "nick": "Paul_q_f",
                                "url": "http://www.sporepedia2.com/t17740-topa-o5"
                            }, {
                                "img": "http://i.imgur.com/3c3bpNP.png",
                                "nick": "Ezkisito",
                                "url": "http://www.sporepedia2.com/t17749-la-hermosa-maria-o5"
                            }, {
                                "img": "http://i1344.photobucket.com/albums/p642/SartekChaos/Crisolitus%20el%20acechador_zpslcbc1j7z.png",
                                "nick": "SartekChaos",
                                "url": "http://www.sporepedia2.com/t17753-crisolitus-el-acechador-o5"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Drialua_zpst2cm8xhn.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17765-drialua-o5"
                            }]
                        }, {
                            "categoria": "Capitán",
                            "creaciones": [{
                                "img": "http://i48.photobucket.com/albums/f231/juan102/The%20S4urus_zpsbf9vernx.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17232-the-s4urus-o5-c"
                            }, {
                                "img": "http://i1269.photobucket.com/albums/jj590/Rayzpook/The%20Goldenbun_zpsermseq7a.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17234-the-goldenbun-o5-c"
                            }, {
                                "img": "http://i21.photobucket.com/albums/b268/dekar_serverbot/GuapaXD22.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17351-guapa-xd-2-0o5c"
                            }, {
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Zap%204.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17301-mi-capitan-o5-c"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Capitan%20Hudson_zpsvfatdmth.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17337-capitan-hudson-o5-c"
                            }, {
                                "img": "http://i.imgur.com/6IyKMwS.png",
                                "nick": "Lechuza",
                                "url": "http://www.sporepedia2.com/t17355-night-owl-o5-c#338812"
                            }, {
                                "img": "http://i.imgur.com/0bDrjbQ.png",
                                "nick": "DaALTF4!",
                                "url": "http://www.sporepedia2.com/t17370-mihisandrajari-o5-c"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/JaMaH%201_zpsjsviepnr.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17376-jamah-o5-c"
                            }, {
                                "img": "http://i.imgur.com/gWYAVjW.png",
                                "nick": "Prinos121",
                                "url": "http://www.sporepedia2.com/t17373-capitan-grosm-o5c"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Denet%20el%20Jinete_zpswkxgpmqy.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17422-denet-el-jinete-o5-c"
                            }, {
                                "img": "http://i.imgur.com/ou1K8Ba.png",
                                "nick": "Miguelcho",
                                "url": "http://www.sporepedia2.com/t17487-capitan-oog-o5-c"
                            }, {
                                "img": "http://i1270.photobucket.com/albums/jj620/Loren1321/DarkWardor_zpsef1e5f4a.png",
                                "nick": "Loren12",
                                "url": "http://www.sporepedia2.com/t17491-dark-wardor-o5-c"
                            }, {
                                "img": "http://i.imgur.com/wA4lyzC.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17550-capitana-mary-o5-c#341761"
                            }, {
                                "img": "http://i.imgur.com/6turprP.png",
                                "nick": "Mr. Hovs",
                                "url": "http://www.sporepedia2.com/t17587-kryo-jaro-o5-c"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/05/canerog.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17649-canerog-o-c#343921"
                            }, {
                                "img": "http://i.imgur.com/udWLptY.png",
                                "nick": "linkplay",
                                "url": "http://www.sporepedia2.com/t17648-el-mutante-capitan-o5"
                            }, {
                                "img": "http://i.imgur.com/IoFQxR2.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17668-kumizu-con-bioarmadura-completa-o5-c#344080"
                            }, {
                                "img": "http://i1288.photobucket.com/albums/b486/Alegorn6/VA-SM2%20Ask%203_zpsxu8oxuqu.png",
                                "nick": "Alegorn",
                                "url": "http://www.sporepedia2.com/t17692-linea-de-mechs-va-sm2-ask-o5c#344269"
                            }, {
                                "img": "http://i.imgur.com/wR3YJub.png",
                                "nick": "Paul_q_f",
                                "url": "http://www.sporepedia2.com/t17739-droide-todoterreno-version-bosque-o5-c"
                            }, {
                                "img": "http://i1344.photobucket.com/albums/p642/SartekChaos/Zelote%20Protoss_zpshegsz01v.png",
                                "nick": "SartekChaos",
                                "url": "http://www.sporepedia2.com/t17751-zelote-protoss-o5-c"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Prototipo%20XR346_zps0mcqpkoj.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17766-prototipo-xr346-o5-c#344862"
                            }, {
                                "img": "http://i32.photobucket.com/albums/d24/AlochGamer/Imagenes/Tale%203_zps0ldenbbd.png",
                                "nick": "ElAloch",
                                "url": "http://www.sporepedia2.com/t17768-tale-o5-c"
                            }]
                        }, {
                            "categoria": "Criatura Inicial",
                            "creaciones": [{
                                "img": "http://static.spore.com/static/thumb/501/009/841/501009841138.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17243-tuskphibiano5i"
                            }, {
                                "img": "http://i1344.photobucket.com/albums/p642/SartekChaos/Uga-uga%20el%20filo%20oacuteseo_zpsgup7joxl.png",
                                "nick": "SartekChaos",
                                "url": "http://www.sporepedia2.com/t17350-uga-uga-el-filo-oseo-o5-i"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Algabruja_zpsq2o63btk.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17336-algabruja-o5-i"
                            }, {
                                "img": "http://i.imgur.com/qxLxsjU.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17307-gorblo-el-cabezon-o5-i"
                            }, {
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Pincher.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17284-criatura-inicial-o5-i"
                            }, {
                                "img": "http://i1006.photobucket.com/albums/af184/brayansuper/CazadorJunkDefensivo-Ofensivo.png",
                                "nick": "BrayanSuper",
                                "url": "http://www.sporepedia2.com/t17263-cazador-junk-defensivo-ofensivo-o5-i"
                            }, {
                                "img": "http://i1269.photobucket.com/albums/jj590/Rayzpook/Pershotd_zpsyduxr16o.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17237-pershot-d-o5-i"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Sightouml_zpsjfeyk2iv.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17239-sight-o-o5-i"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/Lalo_zpse73ca9d0.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17253-lalo-o5-i"
                            }, {
                                "img": "http://i766.photobucket.com/albums/xx304/cristobaltorafe91/Quimert%20rt%20Comedor%20de%20Algas_zpspu5rfn9k.png",
                                "nick": "julia911",
                                "url": "http://www.sporepedia2.com/t17240-quimert-rt-comedor-de-algas-o5-i"
                            }, {
                                "img": "http://i.imgur.com/nDeL0Va.png",
                                "nick": "Lechuza",
                                "url": "http://www.sporepedia2.com/t17251-bindaw-o5-i"
                            }, {
                                "img": "http://i.imgur.com/6TAEJGY.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17247-brus-o5-i"
                            }, {
                                "img": "http://i.imgur.com/SviTQ7J.png",
                                "nick": "DaALTF4!",
                                "url": "http://www.sporepedia2.com/t17368-chuncky-o5-i"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Salamteado_zpstw4fxigu.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17614-salamteado-o5-i"
                            }, {
                                "img": "http://i.imgur.com/Cw2PYBp.png",
                                "nick": "Mr. Hovs",
                                "url": "http://www.sporepedia2.com/t17581-ahervean-o5-i"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/03/oman.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17650-oman-o5-i"
                            }, {
                                "img": "http://i.imgur.com/EZUT2RZ.png",
                                "nick": "Miguelcho",
                                "url": "http://www.sporepedia2.com/t17485-cangrejito-o5-i"
                            }, {
                                "img": "http://i.gyazo.com/e57ec148404917394abde043e133408d.png",
                                "nick": "Glumyglu",
                                "url": "http://www.sporepedia2.com/t17657-foca-cangrejo-i-o5"
                            }, {
                                "img": "http://i40.photobucket.com/albums/e201/Anhaelis/Myria%204_zpsoi71xxxx.png",
                                "nick": "Anhaelis [RDLA]",
                                "url": "http://www.sporepedia2.com/t17488-myria-o5-i"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Dareewas_zpshmq0gur2.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17711-dareewas-o5-i"
                            }, {
                                "img": "http://i.imgur.com/xCfZ0Qy.png",
                                "nick": "Ezkisito",
                                "url": "http://www.sporepedia2.com/t17746-monorpion-o5-i#344765"
                            }, {
                                "img": "http://i32.photobucket.com/albums/d24/AlochGamer/Peliaguas_zpsflcrnku0.png",
                                "nick": "ElAloch",
                                "url": "http://www.sporepedia2.com/t17769-peliaguas-nombre-random-del-spore-o5-i"
                            }]
                        }, {
                            "categoria": "Vehículo Terrestre",
                            "creaciones": [{
                                "img": "http://i.imgur.com/31zFhXs.png",
                                "nick": "Lechuza",
                                "url": "http://www.sporepedia2.com/t17249-ignis-o5-t"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Grua%20de%20colonia%2086-M1_zps4mwu4p6k.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17255-grua-de-colonia-86-m1-o5-t"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/Sircauren_zpsvnisxvst.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17296-sircauren-o5-t"
                            }, {
                                "img": "http://static.spore.com/static/thumb/501/008/697/501008697045.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17316-el-gran-finalo5t"
                            }, {
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Negrojo.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17306-vamos-de-paseo-pi-pi-pi-o5-t"
                            }, {
                                "img": "http://i1269.photobucket.com/albums/jj590/Rayzpook/DeluxeMousine_zpsjeet3kkd.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17328-deluxe-mousine-o5-t"
                            }, {
                                "img": "http://i.imgur.com/m7PWbKV.png",
                                "nick": "ChяφnStrคx",
                                "url": "http://www.sporepedia2.com/t17252-shiguleh-teh-o5-t"
                            }, {
                                "img": "http://i.imgur.com/pZ1461t.png",
                                "nick": "DaALTF4!",
                                "url": "http://www.sporepedia2.com/t17365-carrito-alegorico-haciendo-referencia-a-los-grox-o5-t"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Biddybuggy_zpswdvbwv8f.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17400-biddybuggy-o5-t"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/03/pimpd.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17416-pimp-d-o5-t"
                            }, {
                                "img": "http://i1288.photobucket.com/albums/b486/Alegorn6/M17%20Krein_zpseildzopw.png",
                                "nick": "Alegorn",
                                "url": "http://www.sporepedia2.com/t17633-m-17-krein-o5t"
                            }, {
                                "img": "http://i.imgur.com/2iGkTjt.png",
                                "nick": "linkplay",
                                "url": "http://www.sporepedia2.com/t17603-mi-creacion-para-t-o5"
                            }, {
                                "img": "http://i.imgur.com/P85He9w.png",
                                "nick": "Ezkisito",
                                "url": "http://www.sporepedia2.com/t17477-obus-autopropulsado-aa-1-o5-t"
                            }, {
                                "img": "http://i.imgur.com/VBiw10j.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17521-oredon-o5-t"
                            }, {
                                "img": "http://i.imgur.com/SqwGs8c.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17559-jack-in-the-box-o5-t"
                            }, {
                                "img": "http://i.imgur.com/0meNnr1.png",
                                "nick": "Mr. Hovs",
                                "url": "http://www.sporepedia2.com/t17586-von-cyth-o5-t"
                            }, {
                                "img": "http://i.imgur.com/ERb5e81.png",
                                "nick": "Dororo",
                                "url": "http://www.sporepedia2.com/t17670-engine-beast-o5-t#344090"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Red-Hornet_zpsgckpjpfz.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17697-set-de-vehiculoso5-t-a-m"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Aldeano%20Mini%20Carro_zps3z5bdg7g.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17701-aldeano-mini-carro-o5-t"
                            }, {
                                "img": "http://i.imgur.com/RNL5f42.png",
                                "nick": "Paul_q_f",
                                "url": "http://www.sporepedia2.com/t17763-ltcs-9-o5-t"
                            }]
                        }, {
                            "categoria": "Vehículo Marítimo",
                            "creaciones": [{
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Submarino%20militar.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17314-mi-submarino-o5-m"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/Marumba1_zpsbed88d5a.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17261-marumbo-o5-m"
                            }, {
                                "img": "http://static.spore.com/static/thumb/501/008/707/501008707648.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17354-escaner-temporalo5m"
                            }, {
                                "img": "http://i.imgur.com/pgJOK8b.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17378-dead-bee-o5-m"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Lancha%20Cybershark_zpsdprrho1z.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17382-lancha-cybershark-o5-m"
                            }, {
                                "img": "http://i.imgur.com/zH4dKwL.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17399-argan-el-destructor-o5-m"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/03/carguero.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17417-carguero-o5-m"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Red%20Star_zpsbwnpzjmn.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17697-set-de-vehiculoso5-t-a-m"
                            }, {
                                "img": "http://i.imgur.com/q7LXkJt.png",
                                "nick": "Dororo",
                                "url": "http://www.sporepedia2.com/t17708-robokyogre-o5-m#344427"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Duck%20Hunt%20Pato_zpskmrjzjky.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17713-duck-hunt-pato-o5-m"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Turboshark_zpsjpzy5uin.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17714-turboshark-o5-m"
                            }, {
                                "img": "http://i.imgur.com/JBq2rZS.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17735-jormungander-la-espia-maritima-o5-m"
                            }, {
                                "img": "http://i.imgur.com/KJ9EqpR.png",
                                "nick": "Ezkisito",
                                "url": "http://www.sporepedia2.com/t17747-fragata-fbsn-1-clase-zavroza-o5-m#344766"
                            }]
                        }, {
                            "categoria": "Vehículo Aéreo",
                            "creaciones": [{
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/F-16%201.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17317-pium-pium-pium-o5-a"
                            }, {
                                "img": "http://i1269.photobucket.com/albums/jj590/Rayzpook/Molusco%20Aereo_zpss44w4fha.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17329-molusco-aereo-o5-a"
                            }, {
                                "img": "http://i.imgur.com/9UIwcv1.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17340-harpia-o5-a"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/Sonorum_zps8b16d585.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17320-sonorum-o5-a"
                            }, {
                                "img": "http://i21.photobucket.com/albums/b268/dekar_serverbot/Kouangai.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17356-kouangaio5a"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Xporich_zpsnohdbg2b.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17383-xplorich-o5-a"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/03/atacante-de-hojalata.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17415-atacante-de-hojalata-o5-a"
                            }, {
                                "img": "http://i.imgur.com/v6VRPaC.png",
                                "nick": "Ezkisito",
                                "url": "http://www.sporepedia2.com/t17450-fma-47-caza-polivalente-o5-a"
                            }, {
                                "img": "http://i.imgur.com/rD0fcnn.png",
                                "nick": "linkplay",
                                "url": "http://www.sporepedia2.com/t17643-guerreros-del-cielo-o5#343835"
                            }, {
                                "img": "http://i1288.photobucket.com/albums/b486/Alegorn6/Jinete%20de%20Sierpe_zpscryfiujk.png",
                                "nick": "Alegorn",
                                "url": "http://www.sporepedia2.com/t17656-jinete-de-sierpe-o5-a#343950"
                            }, {
                                "img": "http://i.imgur.com/HOwAd9W.png",
                                "nick": "Dororo",
                                "url": "http://www.sporepedia2.com/t17676-air-crusher-o5-a"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Blue%20Ciclops_zpsvxclboqa.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17697-set-de-vehiculoso5-t-a-m"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Flemye_zpsc1vymjhq.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17703-flemye-o5-a"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Buzz%20Bomber_zpswquqrkvh.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17716-buzz-bomber-o5-a"
                            }, {
                                "img": "http://i.imgur.com/1EyGG5J.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17759-rotulador-o5-a"
                            }]
                        }, {
                            "categoria": "Nave Espacial",
                            "creaciones": [{
                                "img": "http://static.spore.com/static/thumb/501/008/710/501008710613.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17275-proyecto-prometeo-y-no-lo-cumpleoo5"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/La%20Raya_zpstr4uiiox.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17341-la-raya-o5"
                            }, {
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Nave%200023.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17327-e-t-llama-a-casa-o5"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Panda-9_zpslw6thplk.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17335-el-panda-09-o5"
                            }, {
                                "img": "http://i1269.photobucket.com/albums/jj590/Rayzpook/Orchest%20King_zpsouhch8pq.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17363-orchest-king-o5"
                            }, {
                                "img": "http://i.imgur.com/Q7jPFiW.png",
                                "nick": "DaALTF4!",
                                "url": "http://www.sporepedia2.com/t17364-gaenix-nave-espacial-o5"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/The%20Lapse_zpsdeim5xk0.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17384-the-lapse-o5"
                            }, {
                                "img": "http://i.imgur.com/5O5sSjB.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17627-imperion-o5"
                            }, {
                                "img": "http://i1301.photobucket.com/albums/ag111/SheridanStar/Spore/Originals/UFOS/Space%20Ship.png",
                                "nick": "CarrotCube",
                                "url": "http://www.sporepedia2.com/t17628-space-ship-o5"
                            }, {
                                "img": "http://i.imgur.com/6fkbnXv.png",
                                "nick": "Ezkisito",
                                "url": "http://www.sporepedia2.com/t17478-nave-de-exploracion-xma-8-o5"
                            }, {
                                "img": "http://i1279.photobucket.com/albums/y536/samuelx43a/Heavy%20attacker%20mk%20IX_zpsjl48fd7j.png",
                                "nick": "spore sam",
                                "url": "http://www.sporepedia2.com/t17295-heavy-attacker-mk-ixo5-nave-espacial"
                            }, {
                                "img": "http://i1288.photobucket.com/albums/b486/Alegorn6/M-5%20Gram_zpshmw9g6py.png",
                                "nick": "Alegorn",
                                "url": "http://www.sporepedia2.com/t17698-fa-1-gram-o5#344354"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Mano%20cohete_zpsqwgxxrih.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17717-mano-cohete-o5"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Rescatador%20de%20tropas%20Nocturno_zpswx6x7ubf.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17720-rescatador-de-tropas-nocturno-o5"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/05/paramiro.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17743-paramiro-o5"
                            }, {
                                "img": "http://i.imgur.com/WWLAsPf.png",
                                "nick": "Paul_q_f",
                                "url": "http://www.sporepedia2.com/t17738-fragata-hsc-145-crimson-taurus-o5"
                            }, {
                                "img": "http://i.imgur.com/BxEoyM8.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17760-la-nave-neonexus-o5"
                            }]
                        }, {
                            "categoria": "Edificio",
                            "creaciones": [{
                                "img": "http://static.spore.com/static/thumb/501/010/328/501010328188.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17283-benten-stadium-and-presso5"
                            }, {
                                "img": "http://s30.postimg.org/h1yf684z1/Cabeza_de_Toy_Freddy.png?noCache=1428002097",
                                "nick": "ChяφnStrคx",
                                "url": "http://www.sporepedia2.com/t17244-cabeza-de-toy-freddy-o5"
                            }, {
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Casas%20del%20aacuterbol.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17342-casita-del-arbol-o5"
                            }, {
                                "img": "http://i.imgur.com/9QIrE8V.png",
                                "nick": "DaALTF4!",
                                "url": "http://www.sporepedia2.com/t17367-fabrica-chocolatera-o5"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/GuaridadeMx3_zpsc90e3736.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17374-guarida-de-mx3-o5"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Castillo%20del%20Baron%20Von%20Maskleuf_zpsv9qho4zg.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17380-castillo-del-baron-von-maskleuf-o5"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/03/figura-del-aventurero.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17393-figura-del-aventurero-o5"
                            }, {
                                "img": "http://i.imgur.com/T6FRCn6.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17407-rise-of-the-icecream-o5"
                            }, {
                                "img": "http://i.imgur.com/regQdzc.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17410-derrota-del-temible-gragh-o5"
                            }, {
                                "img": "http://i.imgur.com/pTdg5yC.png",
                                "nick": "technoguyx",
                                "url": "http://www.sporepedia2.com/t17414-el-matadero-de-billy-o5"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/El%20Pequentildeo%20drag_zpsd58oilpo.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17423-el-pequeno-drag-o5"
                            }, {
                                "img": "http://i.imgur.com/Ke64avL.png",
                                "nick": "Miguelcho",
                                "url": "http://www.sporepedia2.com/t17494-canio-o5"
                            }, {
                                "img": "http://i1288.photobucket.com/albums/b486/Alegorn6/Taberna%20de%20la%20Plaza_zpso5csf6nc.png",
                                "nick": "Alegorn",
                                "url": "http://www.sporepedia2.com/t17664-taberna-de-la-plaza-o5#344039"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/La%20Copa_zpszwnek2jx.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17695-la-copa-o5"
                            }, {
                                "img": "http://i.imgur.com/ICVlPIU.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17734-centro-de-colonia-neonexus-o5"
                            }, {
                                "img": "http://i.imgur.com/xk7lQOY.png",
                                "nick": "Ezkisito",
                                "url": "http://www.sporepedia2.com/t17750-la-casita-de-los-zares-fumadores-o5"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Vara%20del%20jefe%20final_zpskuixk6dl.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17764-vara-del-jefe-final-o5"
                            }, {
                                "img": "http://i.imgur.com/bTsBNcL.png",
                                "nick": "Paul_q_f",
                                "url": "http://www.sporepedia2.com/t17767-red-velvet-cupcake-o5-regalo-para-la-s2"
                            }]
                        }, {
                            "categoria": "Himno",
                            "creaciones": [{
                                "img": "http://i21.photobucket.com/albums/b268/dekar_serverbot/Floodatronic1.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17288-tema-flood-de-himnos-o5"
                            }, {
                                "img": "http://i.imgur.com/M7r9EoG.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17362-mi-primer-himno-o5"
                            }, {
                                "img": "http://i.imgur.com/RtISxN8.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17408-la-tantilla-o5"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Gotas%20de%20Rocio_zps7dazzpre.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17483-sonidos-de-la-cascada-misteriosa-mi-primer-himno-o5"
                            }, {
                                "img": "http://i.imgur.com/rTbTeEy.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17651-tema-de-aanimations-o5-advertencia-de-cutre"
                            }, {
                                "img": "http://i1288.photobucket.com/albums/b486/Alegorn6/1-Next%20to%20you_zpsqsghhmqq.png",
                                "nick": "Alegorn",
                                "url": "http://www.sporepedia2.com/t17655-next-to-you-parasyte-o5#343947"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Musica%20de%20Fondo_zpshs8rgepb.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17696-musica-de-fondo-o5"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Tono%20De%20Spode_zpsmljjo9e7.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17721-tono-de-spode-o5"
                            }, {
                                "img": "http://imgur.com/fmB4Yyj.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17757-intento-de-unicorn-zombie-apocalypse-o5"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Thelody_zps6eslogob.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17758-thelody-o5"
                            }]
                        }, {
                            "categoria": "Template Homenaje",
                            "creaciones": [{
                                "img": "http://i21.photobucket.com/albums/b268/dekar_serverbot/Fluorobotana.png",
                                "nick": "dekarserverbot",
                                "url": "http://www.sporepedia2.com/t17292-fluorobotanao5t"
                            }, {
                                "img": "http://i1310.photobucket.com/albums/s646/Pandipan1999/Dragonic%20Mista_zpskt8t8mrt.png",
                                "nick": "Pandipan1999",
                                "url": "http://www.sporepedia2.com/t17339-dragonic-mista-o5-t"
                            }, {
                                "img": "http://i1347.photobucket.com/albums/p703/RhineGuapo/Creaciones/Caperonni_zps83ixa0wp.png",
                                "nick": "Rhinestone",
                                "url": "http://www.sporepedia2.com/t17344-caperonni-o5-t"
                            }, {
                                "img": "http://i48.photobucket.com/albums/f231/juan102/Guardian%20de%20Gemas%20Crhon_zpszeewbv82.png",
                                "nick": "Metacheto",
                                "url": "http://www.sporepedia2.com/t17294-guardian-de-gemas-crh-on-o5-t"
                            }, {
                                "img": "http://i578.photobucket.com/albums/ss228/AkiraHyuga/Template%20de%20Xhaps%20modificado.png",
                                "nick": "FlairDreamer",
                                "url": "http://www.sporepedia2.com/t17343-homenaje-al-template-mista-o5-t"
                            }, {
                                "img": "http://i1294.photobucket.com/albums/b603/MrSouls/Creaciones%20SPORE/Caminante%20de%20la%20cienaga_zps7jesj9ct.png",
                                "nick": "Cubetastic Souls",
                                "url": "http://www.sporepedia2.com/t17271-caminante-de-la-cienaga-o5-t"
                            }, {
                                "img": "http://i.imgur.com/wgsZnAI.png",
                                "nick": "fhenix_91",
                                "url": "http://www.sporepedia2.com/t17265-mutacion-de-mista-01-o5-t"
                            }, {
                                "img": "http://i.imgur.com/FN3yJxu.png",
                                "nick": "Lechuza",
                                "url": "http://www.sporepedia2.com/t17268-necrogaltista-o5-t"
                            }, {
                                "img": "http://i.imgur.com/X2AyLW2.png",
                                "nick": "SrGaliಠth",
                                "url": "http://www.sporepedia2.com/t17397-segador-de-alma-o5-t"
                            }, {
                                "img": "http://i.imgur.com/gKILOdx.png",
                                "nick": "Cocoa",
                                "url": "http://www.sporepedia2.com/t17403-mistorp-o5-t"
                            }, {
                                "img": "http://i1292.photobucket.com/albums/b571/Jjuanes_Pixeled/Cruze%20Mista_zpsghhtzcvb.png",
                                "nick": "DeckPepsi",
                                "url": "http://www.sporepedia2.com/t17719-cruze-mista-o5-t"
                            }, {
                                "img": "https://misionxspore.files.wordpress.com/2015/05/xhops.png",
                                "nick": "MisiónXSpore",
                                "url": "http://www.sporepedia2.com/t17742-xhops-o5-t-la-belleza-esta-en-el-interior"
                            }, {
                                "img": "http://i1344.photobucket.com/albums/p642/SartekChaos/Sartista_zps4vcqmbls.png",
                                "nick": "SartekChaos",
                                "url": "http://www.sporepedia2.com/t17752-sartista-o5-t"
                            }]
                        }];
		
			$(document).ready(function(){
				for(var i = 0; i < categorias.length; i++){
					$("body").append('<div class="h3">' + categorias[i].categoria + '</div>');
					$("body").append('<input type="radio" name="' + categorias[i].categoria + '" value="<i>Ninguna</i>" checked><i> Ninguna</i></input>');
					for(var j = 0; j < categorias[i].creaciones.length; j++){
						$("body").append('<br><input type="radio" name="' + categorias[i].categoria + '" value="' + j + '"><a href="' + categorias[i].creaciones[j].url + '" target="_blank" title=""> ' + categorias[i].creaciones[j].nick + '</a></input>');
						$("a:last").tooltip({content: "<img width='128' height='128' src='"+ categorias[i].creaciones[j].img + "'>"});
					}
					$("body").append('<hr><b>Observaciones:</b>');
					$("body").append('<br><textarea name="' + categorias[i].categoria + '" class="inputbox" placeholder="Escriba la razón de su elección..."></textarea>');
				}
				$("body").append('<div class="h3"></div>');
				$("body").append('<input type="submit" class="button2" value="Enviar" onclick="enviarVotacion()";>');
			});
			
			function enviarVotacion(){
				$('textarea').filter(function(){return this.value!=''}).css("border", "");
				if($('textarea').filter(function(){return this.value==''}).length){
						$('textarea').filter(function(){return this.value==''}).css("border", "3px solid red");
						alert("Debés llenar todos los campos de observaciones, incluso en las categorías donde no votás por ninguna creación (debés explicar el por qué de esto)."); 
				} else {
						var texto = "[u]Mi votación[/u]";
						for(var i = 0; i < categorias.length; i++){
								texto +=  "\n\n[table border='1' width='100%''][tr][td colspan=2][b][center]" + categorias[i].categoria + "[/center][/b][/td][/tr]";
								if($('input[name="' + categorias[i].categoria + '"]:checked').val() != "<i>Ninguna</i>"){
									var img = categorias[i].creaciones[$('input[name="' + categorias[i].categoria + '"]:checked').val()].img;
									var nick = categorias[i].creaciones[$('input[name="' + categorias[i].categoria + '"]:checked').val()].nick;
									var url = categorias[i].creaciones[$('input[name="' + categorias[i].categoria + '"]:checked').val()].url;
									var nickurl = "[url=" + url + "]" + nick + "[/url]";
								} else {
									var img = "http://i.imgur.com/EWzFQhJ.png";
									var nickurl = "[i]Ninguna[/i]";
								}
								texto += "[tr][td width='128px'][img(128px,128px)]" + img + "[/img][/td][td rowspan='2']" + $('textarea[name="' +  categorias[i].categoria + '"]').val() + "[/td][/tr]";
								texto += "[tr][td][center]" + nickurl +"[/center][/td][/tr][/table]";
						}
						parent.$("textarea").val(texto);
						parent.$("[value='Enviar']").click();
				}
			}
		</script>
	</head>
	<body style="background-color: #3D3D3D; background-image: none; padding-left: 10px; padding-right: 10px;"></body>
</html>
