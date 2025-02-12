// Dados do arquivo fornecido
const data = [
    { dn: "1945", cidade: "Arapiraca", estado: "ALAGOAS", concessionaria: "NOVO MUNDO", endereco: "Rod. AL 110, 189A, Canafístula", cep: "57302-045", telefone: "(82) 3482-5200", email: "nmundo@nmundo.com.br" },
  { dn: "1965", cidade: "Crato", estado: "CEARÁ", concessionaria: "CEQUIP", endereco: "Av. Padre Cícero, 4500 - KM 4,5, São José", cep: "63133-830", telefone: "(88) 3523-8488", email: "cequip@cequip.com.br" },
  { dn: "4774", cidade: "Rondonópolis", estado: "MATO GROSSO", concessionaria: "MÔNACO DIESEL", endereco: "R. Bonifácio Sachetti, 5426, Lote 9, Qd 7 - Distrito Industrial", cep: "78745-001", telefone: "(66) 2101-3550", email: "atendimento_vw@grupomonaco.com.br" },
  { dn: "4757", cidade: "Brasilia", estado: "DISTRITO FEDERAL", concessionaria: "NASA", endereco: "A. D. E. Conj. 02, Lote 01, Cidade Universitária", cep: "71735-720", telefone: "(61) 3399-9000", email: "marketing@gruponasa.com.br" },
  { dn: "1928", cidade: "Sinop", estado: "MATO GROSSO", concessionaria: "MÔNACO DIESEL", endereco: "R. Colonizador Ênio Pipino, 7465 - Setor Chácara 2", cep: "78550-556", telefone: "(66) 3515-0735", email: "atendimento_vw@grupomonaco.com.br" },
  { dn: "4756", cidade: "Macapá", estado: "AMAPÁ", concessionaria: "MÔNACO DIESEL", endereco: "Rodovia Duca Serra, 1721 - KM 03, Cabralzinho", cep: "68906-801", telefone: "(96) 3261-2800", email: "atendimento_vw@grupomonaco.com.br" },
  { dn: "4752", cidade: "Cachoeiro de Itapemirim", estado: "ESPÍRITO SANTO", concessionaria: "ORVEL", endereco: "Rod. Cachoeiro Safra, s/nº, KM 09, União Universitária", cep: "29315-004", telefone: "(28) 2101-7333", email: "orvel-ci@orvel.com.br" },
  { dn: "4717", cidade: "Campo Grande", estado: "MATO GROSSO DO SUL", concessionaria: "GRANFER", endereco: "Av. Costa e Silva, 3341, Universitário", cep: "79063-900", telefone: "(67) 3398-9898", email: "granfer@granfercaminhoes.com.br" },
  { dn: "4705", cidade: "Manaus", estado: "AMAZONAS", concessionaria: "REZENDE", endereco: "Av. Tancredo Neves, 640, Parque Dez", cep: "69054-700", telefone: "(92) 3646-0400", email: "contato@rezendecaminhoes.com.br" },
  { dn: "4743", cidade: "Linhares", estado: "ESPÍRITO SANTO", concessionaria: "ORVEL", endereco: "Rod. BR-101, s/nº, KM 137, Canivete", cep: "29915-140", telefone: "(27) 3373-7000", email: "orvel-ln@orvel.com.br" },
  { dn: "1901", cidade: "Dourados", estado: "MATO GROSSO DO SUL", concessionaria: "GRANFER", endereco: "Rodovia BR 163, 2.100, Parque das Nações", cep: "79841-550", telefone: "(67) 3416-7100", email: "granferdds@granfercaminhoes.com.br" },
  { dn: "4745", cidade: "Barreiras", estado: "BAHIA", concessionaria: "BRAVO", endereco: "Av. ACM, 2486, Novo Horizonte", cep: "47802-366", telefone: "(77) 3611-9150", email: "bravo@bravocm.com.br" },
  { dn: "4843", cidade: "Serra", estado: "ESPÍRITO SANTO", concessionaria: "AUTOBAHN", endereco: "Rod. BR-101 Norte, KM 265, Carapina", cep: "29162-930", telefone: "(27) 3398-1800", email: "faleconosco@autobahncaminhoes.com.br" },
  { dn: "1903", cidade: "Três Lagoas", estado: "MATO GROSSO DO SUL", concessionaria: "GRANFER", endereco: "Av. Ranulpho Marques Leal, 150, Jd. dos Ipês", cep: "79620-340", telefone: "(67) 3509-0500", email: "granfertls@granfercaminhoes.com.br" },
  { dn: "1900", cidade: "Feira de Santana", estado: "BAHIA", concessionaria: "BRAVO", endereco: "Av. Dep. Luis Eduardo Magalhães, 1095, BR-324, KM 10 - Humildes", cep: "44135-000", telefone: "(75) 2101-9600", email: "bravo@bravocm.com.br" },
  { dn: "4729", cidade: "Anápolis", estado: "GOIÁS", concessionaria: "FUTURA", endereco: "Av. Brasil, 3697, Setor Sul", cep: "75124-145", telefone: "(62) 3311-9600", email: "futura@futuracaminhoes.com.br" },
  { dn: "1963", cidade: "Arcos", estado: "MINAS GERAIS", concessionaria: "DIVISA", endereco: "Rua Fausto Botelho Notini, 500, Distrito Industrial III", cep: "35588-000", telefone: "(37) 3405-2221", email: "caminhoes@divisavw.com.br" },
  { dn: "4781", cidade: "Guanambi", estado: "BAHIA", concessionaria: "BRAVO", endereco: "Rodovia BR-030, 6.280, KM 6, Zona Rural", cep: "46430-000", telefone: "(77) 3451-8850", email: "bravo@bravocm.com.br" },
  { dn: "4844", cidade: "Goiânia", estado: "GOIÁS", concessionaria: "BELCAR", endereco: "Rod. BR-153, KM 1282, Alto da Glória", cep: "74815-780", telefone: "(62) 3239-9600", email: "belcar@belcarcaminhoes.com.br" },
  { dn: "4974", cidade: "Belo Horizonte", estado: "MINAS GERAIS", concessionaria: "ELMAZ", endereco: "Av. Ver. Cícero Idelfonso, 1534, Califórnia", cep: "30855-000", telefone: "(31) 3389-4000", email: "marketing@elmazcaminhoes.com.br" },
  { dn: "4770", cidade: "Itabuna", estado: "BAHIA", concessionaria: "BRAVO", endereco: "Rodovia BR-101, s/nº, KM 502, Santo Antônio", cep: "45608-750", telefone: "(73) 2102-9600", email: "bravo@bravocm.com.br" },
  { dn: "1910", cidade: "Itumbiara", estado: "GOIÁS", concessionaria: "BELCAR", endereco: "Via Expressa Júlio Borges de Souza, 6540, Setor Industrial", cep: "75500-000", telefone: "(64) 3404-6006", email: "belcar@belcarcaminhoes.com.br" },
  { dn: "4786", cidade: "Conselheiro Lafaiete", estado: "MINAS GERAIS", concessionaria: "GAPLAN", endereco: "Rod. BR-040, s/nº, KM 628,5 - Anexo I, Carijós", cep: "36400-000", telefone: "(31) 3769-4100", email: "administracao.lafaiete@gaplan.com.br" },
  { dn: "4990", cidade: "Salvador", estado: "BAHIA", concessionaria: "BRAVO", endereco: "Rod. BR-324, 8.890, KM 8,5, Pirajá", cep: "41233-030", telefone: "(71) 3390-9600", email: "bravo@bravocm.com.br" },
  { dn: "4719", cidade: "Rio Verde", estado: "GOIÁS", concessionaria: "NASA", endereco: "Rua Marcha para Oeste, 1.443, Setor Alvorada", cep: "75905-701", telefone: "(64) 3611-3000", email: "marketing@gruponasa.com.br" },
  { dn: "4730", cidade: "Teresina", estado: "PIAUÍ", concessionaria: "MÔNACO DIESEL", endereco: "Av. Prefeito Wall Ferraz, 10745, Santo Antônio", cep: "64030-005", telefone: "(86) 4009-2500", email: "atendimento_vw@grupomonaco.com.br" },
    { dn: "4798", cidade: "Uberlândia", estado: "MINAS GERAIS", concessionaria: "GAPLAN", endereco: "Av. Airton Borges da Silva, 1.530, Anexo B, Distrito Industrial", cep: "38402-333", telefone: "(34) 3230-4000", email: "vendas.uberlandia@gaplan.com.br" },
    { dn: "4966", cidade: "Francisco Beltrão", estado: "PARANÁ", concessionaria: "ICAVEL", endereco: "Rodovia PR-483, 1771, Bairro Água Branca", cep: "85601-195", telefone: "(46) 3211-6000", email: "icavel@icavel.com.br" },
    { dn: "4788", cidade: "Duque de Caxias", estado: "RIO DE JANEIRO", concessionaria: "TRANSRIO", endereco: "Rod. Washington Luiz, 4230, compl. 1871, Parque Guarus", cep: "28073-507", telefone: "(22) 2735-7377", email: "transrio@transrio.com.br" },
    { dn: "4736", cidade: "Varginha", estado: "MINAS GERAIS", concessionaria: "GAPLAN", endereco: "Rod. BR-491, s/nº, KM 251, Zona Rural", cep: "37062-405", telefone: "(35) 3229-4200", email: "varginha@gaplan.com.br" },
    { dn: "4768", cidade: "Guarapuava", estado: "PARANÁ", concessionaria: "ICAVEL", endereco: "R. Tucuruí, 351, Conradinho", cep: "85045-302", telefone: "(42) 3629-7400", email: "icavel@icavel.com.br" },
    { dn: "4928", cidade: "Resende", estado: "RIO DE JANEIRO", concessionaria: "ABOLIÇÃO", endereco: "Rod. Washington Luiz, 4230, V. S. Sebastião", cep: "25055-000", telefone: "(21) 3661-9999", email: "ababolicaoman@grupoab.com.br" },
    { dn: "4700", cidade: "Ananindeua", estado: "PARÁ", concessionaria: "MÔNACO DIESEL", endereco: "Rod. BR-316, s/nº, KM 06, Águas Lindas", cep: "67020-000", telefone: "(91) 3075-5000", email: "diretoria@grupomonaco.com.br" },
    { dn: "1951", cidade: "Ibaiti", estado: "PARANÁ", concessionaria: "SERVOPA", endereco: "Rod. BR-153, KM 103, Sala 01, Centro", cep: "84900-000", telefone: "(43) 3546-1060", email: "nfe.ibaiti@servopa.com.br" },
    { dn: "4942", cidade: "Nova Friburago", estado: "RIO DE JANEIRO", concessionaria: "TRANSRIO", endereco: "Av. Engenheiro Hans Geiser, 650, Duas Pedras", cep: "28605-220", telefone: "(22) 2523-1155", email: "transrio@transrio.com.br" },
    { dn: "4918", cidade: "Marabá", estado: "PARÁ", concessionaria: "SULPARÁ", endereco: "Rod. PA-150 CSI 29, KM 7, Qd 01 Lt 11, Nova Marabá", cep: "68501-535", telefone: "(94) 2103-8700", email: "sulpara@revemar.com.br" },
    { dn: "4792", cidade: "Marialva", estado: "PARANÁ", concessionaria: "CHIAPETTI", endereco: "Rod. BR-376, s/nº, KM 188, Zona Suburbana", cep: "86990-000", telefone: "(44) 3125-9999", email: "chiapettimaringa@chiapetti.com.br" },
    { dn: "4790", cidade: "Resende", estado: "RIO DE JANEIRO", concessionaria: "TRANSRIO", endereco: "Av. Jefferson Geraldo Bruno, 2.600, Paraíso", cep: "27536-015", telefone: "(24) 3355-1580", email: "transrio@transrio.com.br" },
    { dn: "1954", cidade: "Parauapebas", estado: "PARÁ", concessionaria: "SULPARÁ", endereco: "Estrada de acesso à Ferrovia, s/nº, KM 4,5, Distrito Industrial", cep: "68515-000", telefone: "(94) 3346-9950", email: "sulpara@revemar.com.br" },
    { dn: "4857", cidade: "Ponta Grossa", estado: "PARANÁ", concessionaria: "RETIMAQ", endereco: "Av. Souza Naves, 3455, Jardim Sabará", cep: "84062-000", telefone: "(42) 3219-4533", email: "retimaq@retimaq.com.br" },
    { dn: "4763", cidade: "Rio de Janeiro", estado: "RIO DE JANEIRO", concessionaria: "TRANSRIO", endereco: "Rod. Presidente Dutra, 1450, Pavuna", cep: "21535-502", telefone: "(21) 2107-3838", email: "transrio@transrio.com.br" },
    { dn: "4799", cidade: "Santarém", estado: "PARÁ", concessionaria: "SULPARÁ", endereco: "Rod. Santarem Cuiabá, 2487 – BR 163, Esperança", cep: "68030-185", telefone: "(93) 99226-8404", email: "sulpara@revemar.com.br" },
    { dn: "4822", cidade: "Umuarama", estado: "PARANÁ", concessionaria: "CHIAPETTI", endereco: "R. Manoel Ramires, 6980 - Marginal da Rod. BR-427, s/nº, Walfredo Gurgel", cep: "87507-011", telefone: "(44) 3621-9997", email: "admcaminhoes@chiapetti.com.br" },
    { dn: "1948", cidade: "Caicó", estado: "RIO GRANDE DO NORTE", concessionaria: "VIA DIESEL", endereco: "Rod. BR-427, s/nº, KM 185, Lot. Recife", cep: "59300-000", telefone: "(84) 3417-1180", email: "thiago.falcao@viadiesel.com.br" },
    { dn: "4980", cidade: "Parnamirim", estado: "RIO GRANDE DO NORTE", concessionaria: "VIA DIESEL", endereco: "Rod. BR-101, s/nº, KM 8", cep: "59149-090", telefone: "(84) 4005-1715", email: "viadiesel@viadiesel.com.br" },
    { dn: "4937", cidade: "Chapecó", estado: "SANTA CATARINA", concessionaria: "L.F.", endereco: "R. Plínio Arlindo de Nez, 4100", cep: "89810-740", telefone: "(49) 3319-5500", email: "lfcaminhoes@lfcaminhoes.com.br" },
    { dn: "4785", cidade: "Araçatuba", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "R. Alziro Zarur, 760", cep: "16026-000", telefone: "(18) 3631-8800", email: "vendasvwata@markaltda.com.br" },
    { dn: "4959", cidade: "Concórdia", estado: "SANTA CATARINA", concessionaria: "VIDECAR", endereco: "R. Tancredo Almeida Neves, 3435", cep: "89700-000", telefone: "(49) 3442-5056", email: "concordia@videcar.com.br" },
    { dn: "4714", cidade: "Araraquara", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "Rod. Washington Luiz, KM 268,2", cep: "14808-080", telefone: "(16) 3301-3700", email: "markaara@markaltda.com.br" },
    { dn: "4972", cidade: "Lajeado", estado: "RIO GRANDE DO SUL", concessionaria: "MONDIAL", endereco: "Rod. BR-386, 1.753, KM 346", cep: "95913-340", telefone: "(51) 3714-4433", email: "mondial@mondialveiculos.com.br" },
    { dn: "4797", cidade: "Passo Fundo", estado: "RIO GRANDE DO SUL", concessionaria: "SULPASSO", endereco: "Rod. BR 285, 2.400 – KM 181", cep: "99043-800", telefone: "(54) 3335-0400", email: "sulpasso@sulpassocaminhoes.com.br" },
    { dn: "4783", cidade: "Campinas", estado: "SÃO PAULO", concessionaria: "TIETÊ", endereco: "Av. Anton Von Zuben, 1721", cep: "13051-145", telefone: "(19) 3729-3000", email: "tietecampinas@tiete.com.br" },
    { dn: "4782", cidade: "Franca", estado: "SÃO PAULO", concessionaria: "SANTA EMÍLIA", endereco: "Rod. Cândido Portinari, s/nº, KM 394,3", cep: "14409-403", telefone: "(16) 2104-4444", email: "josecarlos.sousa@santaemiliacaminhoes.com.br" },
    { dn: "4726", cidade: "Campinas", estado: "SÃO PAULO", concessionaria: "TIETÊ", endereco: "Av. Marginal Direita do Rio Tiête, 700", cep: "05118-100", telefone: "(11) 3622-2000", email: "tiete@tiete.com.br" },
    { dn: "4775", cidade: "Marília", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "Av. José de Grande, 256, sala 02", cep: "17519-470", telefone: "(14) 3401-2560", email: "caixalitoral@apta.com.br" },
    { dn: "4732", cidade: "São Vicente", estado: "SÃO PAULO", concessionaria: "APTA", endereco: "R. Cásper Líbero, 252", cep: "11350-100", telefone: "(13) 3465-2000", email: "apta@aptacaminhoes.com.br" },
    { dn: "4727", cidade: "Sorocaba", estado: "SÃO PAULO", concessionaria: "DIBRACAM", endereco: "Rod. Raposo Tavares, KM 95,4 – Lote área 1A", cep: "18023-000", telefone: "(15) 3229-6666", email: "sorocaba@dibracam.com.br" },
    { dn: "1961", cidade: "Votuporanga", estado: "SÃO PAULO", concessionaria: "COTAVE", endereco: "Rua Walter Galloro, 361", cep: "15507-216", telefone: "(17) 2101-0880", email: "cotave@cotave.com.br" },
    { dn: "87", cidade: "São Bernardo do Campo", estado: "SÃO PAULO", concessionaria: "APTA", endereco: "Estrada Galvão Bueno, 6597, Jd. Represa", cep: "09842-080", telefone: "(11) 4359-9000", email: "apta@aptacaminhoes.com.br" },
    { dn: "4976", cidade: "Santo André", estado: "SÃO PAULO", concessionaria: "DIBRACAM", endereco: "Av. dos Estados, 1900, Vila Metalúrgica", cep: "09220-570", telefone: "(11) 4993-7000", email: "diretoria@dibracam.com.br" },
    { dn: "4993", cidade: "Ribeirão Preto", estado: "SÃO PAULO", concessionaria: "SANTA EMÍLIA", endereco: "Rod. Anhanguera, KM 306, Jardim Manoel Penna", cep: "14097-140", telefone: "(16) 2102-1100", email: "alessandra.correa@santaemiliacaminhoes.com.br" },
    { dn: "4780", cidade: "Palmas", estado: "TOCANTINS", concessionaria: "TRANSRIO", endereco: "Quadra 912 Sul, Alameda 3, Lote 1/2A, Distrito Eco Industrial", cep: "77023-482", telefone: "(63) 3219-3600", email: "transrio@transrio.com.br" },
    { dn: "1959", cidade: "Gurupi", estado: "TOCANTINS", concessionaria: "TRANSRIO", endereco: "Rodovia BR 153, S/N – KM 669 – LT 01B1, Setor Central", cep: "77402-210", telefone: "(63) 3301-3600", email: "transrio@transrio.com.br" },
    { dn: "1915", cidade: "Registro", estado: "SÃO PAULO", concessionaria: "MAGGI", endereco: "Rod. BR-116, s/nº, KM 439,5, Bairro Arapongal", cep: "11900-000", telefone: "(13) 3828-6000", email: "admregistro@maggicaminhoes.com.br" },
    { dn: "1958", cidade: "Araguaína", estado: "TOCANTINS", concessionaria: "TRANSRIO", endereco: "Rod. BR-153, s/nº, lote 082A, Zona Lontra", cep: "77839-400", telefone: "(63) 2112-3600", email: "transrio@transrio.com.br" },
    { dn: "4793", cidade: "Regente Feijó", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "Rod. Raposo Tavares SP 270, KM 553, Distrito Industrial – Bairro Santo Inácio", cep: "19570-000", telefone: "(18) 3199-1200", email: "markaregente@markaltda.com.br" },
    { dn: "4779", cidade: "Nossa Senhora do Socorro", estado: "SERGIPE", concessionaria: "TRANSRIO", endereco: "Rod. BR-101, KM 92, Palestina", cep: "49160-000", telefone: "(79) 3212-1600", email: "contato@transriosergipe.com.br" },
    { dn: "4811", cidade: "Piracicaba", estado: "SÃO PAULO", concessionaria: "MAGGI", endereco: "Estrada Antônio Abdalla, 1010, Jardim Califórnia", cep: "13424-700", telefone: "(19) 3411-8138", email: "adm.piracicaba@maggicaminhoes.com.br" },
    { dn: "4807", cidade: "Orlândia", estado: "SÃO PAULO", concessionaria: "PALMA", endereco: "Av. Marginal Esquerda, 2955, Jd. Cid. Alta", cep: "14620-000", telefone: "(16) 3821-6500", email: "palmavw@palmavw.com.br" },
    { dn: "4727", cidade: "Sorocaba", estado: "SÃO PAULO", concessionaria: "DIBRACAM", endereco: "Rod. Raposo Tavares, KM 95,4 – Lote área 1A, Vila Artura", cep: "18023-000", telefone: "(15) 3229-6666", email: "sorocaba@dibracam.com.br" },
    { dn: "4971", cidade: "Mogi-Guaçu", estado: "SÃO PAULO", concessionaria: "GAPLAN", endereco: "Av. Min. Roberto C. Alves, 1895, Distrito Industrial", cep: "13840-970", telefone: "(19) 3818-0500", email: "mogi@gaplan.com.br" },
    { dn: "4775", cidade: "Marília", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "Av. José de Grande, 256, sala 02, Jardim Parati", cep: "17519-470", telefone: "(14) 3401-2560", email: "caixalitoral@apta.com.br" },
    { dn: "4732", cidade: "São Vicente", estado: "SÃO PAULO", concessionaria: "APTA", endereco: "R. Cásper Líbero, 252, Cidade Náutica", cep: "11350-100", telefone: "(13) 3465-2000", email: "apta@aptacaminhoes.com.br" },
    { dn: "4746", cidade: "Limeira", estado: "SÃO PAULO", concessionaria: "MAGGI", endereco: "Avenida Figueira Branca, 1.035, Bairro dos Lopes", cep: "13487-510", telefone: "(19) 3404-8080", email: "fiscal@cotalicaminhoes.com.br" },
    { dn: "4969", cidade: "São Paulo", estado: "SÃO PAULO", concessionaria: "TIETÊ", endereco: "Av. Marginal Direita do Rio Tiête, 700, Vila Jaguara", cep: "05118-100", telefone: "(11) 3622-2000", email: "tiete@tiete.com.br" },
    { dn: "4758", cidade: "Jundiaí", estado: "SÃO PAULO", concessionaria: "MAGGI", endereco: "Av. Armando Giassetti, 300, Torres de São José", cep: "13214-525", telefone: "(11) 4589-7000", email: "maggi.jundiai@maggicaminhoes.com.br" },
    { dn: "4872", cidade: "São José do Rio Preto", estado: "SÃO PAULO", concessionaria: "COTAVE", endereco: "Av. Tarraf, 3210-A, Jd. Alto Alegre", cep: "15057-430", telefone: "(17) 3215-9880", email: "cotave@cotave.com.br" },
    { dn: "4877", cidade: "Jaú", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "Av. Dona Olímpia Sanzovo Caseiro, 255-A, Distrito Industrial", cep: "17206-240", telefone: "(14) 3602-2500", email: "marka@markaltda.com.br" },
    { dn: "1964", cidade: "Tijucas", estado: "SANTA CATARINA", concessionaria: "R.F.", endereco: "R. Wilson Lemos, 2.400, Centro", cep: "88200-000", telefone: "(48) 3263-2921", email: "rf@rfcaminhoes.com.br" },
    { dn: "4753", cidade: "Boa Vista", estado: "RORAIMA", concessionaria: "REZENDE", endereco: "Av. Centenário, 1077, Centenário", cep: "69312-603", telefone: "(95) 3626-6363", email: "contato@rezendecaminhoes.com.br" },
    { dn: "1904", cidade: "Vilhena", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "Av Celso Mazutti, 2735, Jd. América", cep: "78995-000", telefone: "(69) 3322-1530", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "4986", cidade: "Porto Velho", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "R. da Beira, 6711, KM 02, Lagoa próximo ao KM 219 - Guarda do Cubatão", cep: "76812-241", telefone: "(69) 3216-6000", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "4722", cidade: "Rio do Sul", estado: "SANTA CATARINA", concessionaria: "W.BREITKOPF", endereco: "Rod. BR-470, 1100, KM 135, Rainha", cep: "89162-020", telefone: "(47) 3525-1377", email: "wbriodosul@wbreitkopf.com.br" },
    { dn: "1924", cidade: "Guarulhos", estado: "SÃO PAULO", concessionaria: "TIETÊ", endereco: "Av. Senador Adolf Schindling, 138, Vl. Hermínia", cep: "07042-020", telefone: "(11) 2421-3000", email: "tieteguarulhos@tiete.com.br" },
    { dn: "4899", cidade: "Palhoça", estado: "SANTA CATARINA", concessionaria: "R.F.", endereco: "R. Januário Pereira de Lima, s/nº, Guarda do Cubatão", cep: "88135-380", telefone: "(48) 3281-0244", email: "rf@rfcaminhoes.com.br" },
    { dn: "4769", cidade: "São Leopoldo", estado: "RIO GRANDE DO SUL", concessionaria: "TRANSRIO SUL", endereco: "Av. Senador Salgado Filho, 555, Rio dos Sinos", cep: "93110-350", telefone: "(51) 3579-7100", email: "transriosul@transrio.com.br" },
    { dn: "4942", cidade: "Santa Maria", estado: "RIO GRANDE DO SUL", concessionaria: "PAMPEIRO", endereco: "Rod. BR-392, 3500, KM 01, Tomazetti", cep: "97070-160", telefone: "(55) 3211-1213", email: "pampeiro@pampeirocaminhoes.com.br" },
    { dn: "4783", cidade: "Campinas", estado: "SÃO PAULO", concessionaria: "TIETÊ", endereco: "Av. Anton Von Zuben, 1721, Jardim São José", cep: "13051-145", telefone: "(19) 3729-3000", email: "tietecampinas@tiete.com.br" },
    { dn: "4856", cidade: "Joaçaba", estado: "SANTA CATARINA", concessionaria: "VIDECAR", endereco: "Rod. BR-282, KM 389, Trevo Oeste", cep: "89600-000", telefone: "(49) 3522-2201", email: "joacaba@videcar.com.br" },
    { dn: "4797", cidade: "Passo Fundo", estado: "RIO GRANDE DO SUL", concessionaria: "SULPASSO", endereco: "Rod. BR 285, 2.400 – KM 181, VALINHOS", cep: "99043-800", telefone: "(54) 3335-0400", email: "sulpasso@sulpassocaminhoes.com.br" },
    { dn: "4972", cidade: "Lajeado", estado: "RIO GRANDE DO SUL", concessionaria: "MONDIAL", endereco: "Rod. BR-386, 1.753, KM 346, Alto do Parque", cep: "95913-340", telefone: "(51) 3714-4433", email: "mondial@mondialveiculos.com.br" },
    { dn: "4789", cidade: "Caçapava", estado: "SÃO PAULO", concessionaria: "TRANSRIO", endereco: "Av. Henry Nestle, 3600, Vila Galvão", cep: "12286-140", telefone: "(12) 3221-0200", email: "transrio@transrio.com.br" },
    { dn: "4903", cidade: "Blumenau", estado: "SANTA CATARINA", concessionaria: "W.BREITKOPF", endereco: "BR-470, 8000, KM 62,5, Badenfurt", cep: "89070-200", telefone: "(47) 3231-6900", email: "wbreitkopf@wbreitkopf.com.br" },
    { dn: "4753", cidade: "Boa Vista", estado: "RORAIMA", concessionaria: "REZENDE", endereco: "Av. Centenário, 1077, Centenário", cep: "69312-603", telefone: "(95) 3626-6363", email: "contato@rezendecaminhoes.com.br" },
    { dn: "1904", cidade: "Vilhena", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "Av Celso Mazutti, 2735, Jd. América", cep: "78995-000", telefone: "(69) 3322-1530", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "4986", cidade: "Porto Velho", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "R. da Beira, 6711, KM 02, Lagoa próximo ao KM 219 - Guarda do Cubatão", cep: "76812-241", telefone: "(69) 3216-6000", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "4722", cidade: "Rio do Sul", estado: "SANTA CATARINA", concessionaria: "W.BREITKOPF", endereco: "Rod. BR-470, 1100, KM 135, Rainha", cep: "89162-020", telefone: "(47) 3525-1377", email: "wbriodosul@wbreitkopf.com.br" },
    { dn: "1924", cidade: "Guarulhos", estado: "SÃO PAULO", concessionaria: "TIETÊ", endereco: "Av. Senador Adolf Schindling, 138, Vl. Hermínia", cep: "07042-020", telefone: "(11) 2421-3000", email: "tieteguarulhos@tiete.com.br" },
    { dn: "4899", cidade: "Palhoça", estado: "SANTA CATARINA", concessionaria: "R.F.", endereco: "R. Januário Pereira de Lima, s/nº, Guarda do Cubatão", cep: "88135-380", telefone: "(48) 3281-0244", email: "rf@rfcaminhoes.com.br" },
    { dn: "4769", cidade: "São Leopoldo", estado: "RIO GRANDE DO SUL", concessionaria: "TRANSRIO SUL", endereco: "Av. Senador Salgado Filho, 555, Rio dos Sinos", cep: "93110-350", telefone: "(51) 3579-7100", email: "transriosul@transrio.com.br" },
    { dn: "4942", cidade: "Santa Maria", estado: "RIO GRANDE DO SUL", concessionaria: "PAMPEIRO", endereco: "Rod. BR-392, 3500, KM 01, Tomazetti", cep: "97070-160", telefone: "(55) 3211-1213", email: "pampeiro@pampeirocaminhoes.com.br" },
    { dn: "4783", cidade: "Campinas", estado: "SÃO PAULO", concessionaria: "TIETÊ", endereco: "Av. Anton Von Zuben, 1721, Jardim São José", cep: "13051-145", telefone: "(19) 3729-3000", email: "tietecampinas@tiete.com.br" },
    { dn: "4856", cidade: "Joaçaba", estado: "SANTA CATARINA", concessionaria: "VIDECAR", endereco: "Rod. BR-282, KM 389, Trevo Oeste", cep: "89600-000", telefone: "(49) 3522-2201", email: "joacaba@videcar.com.br" },
    { dn: "4797", cidade: "Passo Fundo", estado: "RIO GRANDE DO SUL", concessionaria: "SULPASSO", endereco: "Rod. BR 285, 2.400 – KM 181, VALINHOS", cep: "99043-800", telefone: "(54) 3335-0400", email: "sulpasso@sulpassocaminhoes.com.br" },
    { dn: "4972", cidade: "Lajeado", estado: "RIO GRANDE DO SUL", concessionaria: "MONDIAL", endereco: "Rod. BR-386, 1.753, KM 346, Alto do Parque", cep: "95913-340", telefone: "(51) 3714-4433", email: "mondial@mondialveiculos.com.br" },
    { dn: "4789", cidade: "Caçapava", estado: "SÃO PAULO", concessionaria: "TRANSRIO", endereco: "Av. Henry Nestle, 3600, Vila Galvão", cep: "12286-140", telefone: "(12) 3221-0200", email: "transrio@transrio.com.br" },
    { dn: "4903", cidade: "Blumenau", estado: "SANTA CATARINA", concessionaria: "W.BREITKOPF", endereco: "BR-470, 8000, KM 62,5, Badenfurt", cep: "89070-200", telefone: "(47) 3231-6900", email: "wbreitkopf@wbreitkopf.com.br" },
    { dn: "4877", cidade: "Jaú", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "Av. Dona Olímpia Sanzovo Caseiro, 255-A, Distrito Industrial", cep: "17206-240", telefone: "(14) 3602-2500", email: "marka@markaltda.com.br" },
    { dn: "1964", cidade: "Tijucas", estado: "SANTA CATARINA", concessionaria: "R.F.", endereco: "R. Wilson Lemos, 2.400, Centro", cep: "88200-000", telefone: "(48) 3263-2921", email: "rf@rfcaminhoes.com.br" },
    { dn: "4753", cidade: "Boa Vista", estado: "RORAIMA", concessionaria: "REZENDE", endereco: "Av. Centenário, 1077, Centenário", cep: "69312-603", telefone: "(95) 3626-6363", email: "contato@rezendecaminhoes.com.br" },
    { dn: "1904", cidade: "Vilhena", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "Av Celso Mazutti, 2735, Jd. América", cep: "78995-000", telefone: "(69) 3322-1530", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "4986", cidade: "Porto Velho", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "R. da Beira, 6711, KM 02, Lagoa próximo ao KM 219 - Guarda do Cubatão", cep: "76812-241", telefone: "(69) 3216-6000", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "4980", cidade: "Parnamirim", estado: "RIO GRANDE DO NORTE", concessionaria: "VIA DIESEL", endereco: "Rod. BR-101, s/nº, KM 8, Distrito Industrial São Cristóvão II", cep: "59149-090", telefone: "(84) 4005-1715", email: "viadiesel@viadiesel.com.br" },
    { dn: "4937", cidade: "Chapecó", estado: "SANTA CATARINA", concessionaria: "L.F.", endereco: "R. Plínio Arlindo de Nez, 4100, Belvedere", cep: "89810-740", telefone: "(49) 3319-5500", email: "lfcaminhoes@lfcaminhoes.com.br" },
    { dn: "4785", cidade: "Araçatuba", estado: "SÃO PAULO", concessionaria: "MARKA", endereco: "R. Alziro Zarur, 760, Jardim Guanabara", cep: "16026-000", telefone: "(18) 3631-8800", email: "vendasvwata@markaltda.com.br" },
    { dn: "4958", cidade: "Umuarama", estado: "PARANÁ", concessionaria: "SERVOPA", endereco: "Rod. BR-376, s/nº, KM 188, Zona Suburbana", cep: "87507-011", telefone: "(44) 3621-9997", email: "admcaminhoes@chiapetti.com.br" },
    { dn: "4784", cidade: "Avaré", estado: "SÃO PAULO", concessionaria: "MAGGI", endereco: "Av. Giovani Begnozzi, 285, Distrito Industrial", cep: "18707-810", telefone: "(14) 3711-4040", email: "pecas.avare@maggicaminhoes.com.br" },
    { dn: "4765", cidade: "Caxias do Sul", estado: "RIO GRANDE DO SUL", concessionaria: "TRANSRIO SUL", endereco: "Rodovia RSC 453, Km 72, nº 39.916 - Lote 31, Quadra 2872 - São Giácomo", cep: "95112-360", telefone: "(54) 3209-7900", email: "transriosul@transrio.com.br" },
    { dn: "4764", cidade: "Eldorado do Sul", estado: "RIO GRANDE DO SUL", concessionaria: "TRANSRIO SUL", endereco: "Rod. BR-290, s/nº, KM 108, Parque Guaíba", cep: "92990-000", telefone: "(51) 3481-7100", email: "transriosul@transrio.com.br" },
    { dn: "4972", cidade: "Lajeado", estado: "RIO GRANDE DO SUL", concessionaria: "MONDIAL", endereco: "Rod. BR-386, 1.753, KM 346, Alto do Parque", cep: "95913-340", telefone: "(51) 3714-4433", email: "mondial@mondialveiculos.com.br" },
    { dn: "4797", cidade: "Passo Fundo", estado: "RIO GRANDE DO SUL", concessionaria: "SULPASSO", endereco: "Rod. BR 285, 2.400 – KM 181, VALINHOS", cep: "99043-800", telefone: "(54) 3335-0400", email: "sulpasso@sulpassocaminhoes.com.br" },
    { dn: "4766", cidade: "Pelotas", estado: "RIO GRANDE DO SUL", concessionaria: "TRANSRIO SUL", endereco: "Rod. BR-392, 5700, KM 67, Fragata", cep: "96050-500", telefone: "(53) 3284-8000", email: "transriosul@transrio.com.br" },
    { dn: "4942", cidade: "Santa Maria", estado: "RIO GRANDE DO SUL", concessionaria: "PAMPEIRO", endereco: "Rod. BR-392, 3500, KM 01, Tomazetti", cep: "97070-160", telefone: "(55) 3211-1213", email: "pampeiro@pampeirocaminhoes.com.br" },
    { dn: "4783", cidade: "Cascavel", estado: "PARANÁ", concessionaria: "ICAVEL", endereco: "Rod. BR-277, KM 582,6, Industrial", cep: "85818-560", telefone: "(45) 2101-6000", email: "icavel@icavel.com.br" },
    { dn: "4769", cidade: "São Leopoldo", estado: "RIO GRANDE DO SUL", concessionaria: "TRANSRIO SUL", endereco: "Av. Senador Salgado Filho, 555, Rio dos Sinos", cep: "93110-350", telefone: "(51) 3579-7100", email: "transriosul@transrio.com.br" },
    { dn: "4986", cidade: "Porto Velho", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "R. da Beira, 6711, KM 02, Lagoa próximo ao KM 219 - Guarda do Cubatão", cep: "76812-241", telefone: "(69) 3216-6000", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "1904", cidade: "Vilhena", estado: "RONDÔNIA", concessionaria: "BURITI", endereco: "Av Celso Mazutti, 2735, Jd. América", cep: "78995-000", telefone: "(69) 3322-1530", email: "buriticam@buriticaminhoes.com.br" },
    { dn: "4753", cidade: "Boa Vista", estado: "RORAIMA", concessionaria: "REZENDE", endereco: "Av. Centenário, 1077, Centenário", cep: "69312-603", telefone: "(95) 3626-6363", email: "contato@rezendecaminhoes.com.br" },

    // Adicione todos os outros registros aqui...
]


// Função para buscar por DN, Estado ou Cidade
function search() {
    const input = document.getElementById("dnInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Limpa resultados anteriores
  
    if (!input) {
      resultDiv.innerHTML = `<p class="error-message">Por favor, digite um DN, Estado ou Cidade.</p>`;
      return;
    }
  
    // Verifica se a entrada é um número (DN)
    const isNumeric = !isNaN(input);
  
    let foundItems = [];
  
    if (isNumeric) {
      // Busca pelo DN
      const found = data.find(item => item.dn === input);
      if (found) {
        foundItems.push(found);
      }
    } else {
      // Busca por Estado ou Cidade (case-insensitive)
      foundItems = data.filter(
        item =>
          item.estado.toLowerCase().includes(input) ||
          item.cidade.toLowerCase().includes(input)
      );
    }
  
    if (foundItems.length > 0) {
      // Exibe os resultados encontrados
      foundItems.forEach(found => {
        resultDiv.innerHTML += `
          <div class="result-item">
            <p><strong>Cidade:</strong> ${found.cidade}</p>
            <p><strong>Estado:</strong> ${found.estado}</p>
            <p><strong>Concessionária:</strong> ${found.concessionaria}</p>
            <p><strong>Endereço:</strong> ${found.endereco}</p>
            <p><strong>CEP:</strong> ${found.cep}</p>
            <p><strong>Telefone:</strong> ${found.telefone}</p>
            <p><strong>Email:</strong> <a href="mailto:${found.email}">${found.email}</a></p>
          </div>
        `;
      });
    } else {
      // Nenhum resultado encontrado
      resultDiv.innerHTML = `<p class="error-message">Nenhum resultado encontrado para "${input}".</p>`;
    }
  }
  
  // Função para sugerir nomes de estados, cidades ou concessionárias enquanto o usuário digita
  function suggest(input) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = ""; // Limpa sugestões anteriores
  
    if (!input) {
      suggestionsDiv.style.display = "none";
      return;
    }
  
    const filteredSuggestions = data
      .filter(
        item =>
          item.estado.toLowerCase().startsWith(input.toLowerCase()) ||
          item.cidade.toLowerCase().startsWith(input.toLowerCase()) ||
          item.concessionaria.toLowerCase().startsWith(input.toLowerCase())
      )
      .map(item => item.estado || item.cidade || item.concessionaria);
  
    if (filteredSuggestions.length > 0) {
      suggestionsDiv.style.display = "block";
      filteredSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement("div");
        suggestionItem.className = "suggestion-item";
        suggestionItem.textContent = suggestion;
        suggestionItem.onclick = () => {
          document.getElementById("dnInput").value = suggestion;
          suggestionsDiv.style.display = "none";
          search();
        };
        suggestionsDiv.appendChild(suggestionItem);
      });
    } else {
      suggestionsDiv.style.display = "none";
    }
  }
  
  // Evento de clique no botão "Buscar"
  document.getElementById("searchButton").addEventListener("click", search);
  
  // Evento de pressionar "Enter" no campo de entrada
  document.getElementById("dnInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      search();
    }
  });
  
  // Evento de entrada no campo de texto para exibir sugestões
  document.getElementById("dnInput").addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    suggest(inputValue);
  });
  
  // Esconde as sugestões ao clicar fora do campo de entrada
  document.addEventListener("click", (event) => {
    const suggestionsDiv = document.getElementById("suggestions");
    if (!event.target.closest("#dnInput")) {
      suggestionsDiv.style.display = "none";
    }
  });