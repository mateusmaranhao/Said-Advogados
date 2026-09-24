export interface ServiceData {
  slug: string;
  path: string;
  title: string;
  seoH1: string;
  subheadline: string;
  shortDesc: string;
  fullDesc: string;
  howWeAct: string;
  situations: string[];
  processSteps: { step: string; title: string; desc: string }[];
  differentials: string[];
  faq: { q: string; a: string }[];
}

export const SITE_CONFIG = {
  name: "Said & Said Advogados Associados",
  shortName: "Said & Said",
  legalRole: "Advogados Associados",
  foundationYear: 1974,
  yearsOfExperience: "50+",
  leadPartner: "Dr. José Pedro Said Junior",
  oab: "OAB/SP",
  phone: "(19) 98424-0366",
  phoneRaw: "+5519984240366",
  whatsappUrl: "https://wa.me/5519984240366?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20o%20Said%20%26%20Said%20Advogados%20Associados.",
  email: "contato@saidadvogados.com.br",
  address: {
    building: "Edifício Mesbla",
    street: "Av. Campos Sales, 715",
    neighborhood: "Centro",
    city: "Campinas",
    state: "SP",
    postalCode: "13010-081",
    country: "Brasil",
    formatted: "Edifício Mesbla - Av. Campos Sales, 715 - Centro, Campinas - SP, 13010-081"
  },
  hours: "Segunda a sexta-feira, das 08h30 às 18h00",
  baseUrl: process.env.APP_URL || "https://saidadvogados.com.br",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com"
  },
  reviews: {
    rating: "4,6",
    count: "70",
    summary: "A experiência do escritório também é refletida nas avaliações de seus clientes, que destacam aspectos como honestidade, eficácia, competência, atendimento e responsabilidade."
  }
};

export const SERVICES_LIST: ServiceData[] = [
  {
    slug: "direito-penal",
    path: "/servicos/direito-penal",
    title: "Direito Penal",
    seoH1: "Direito Penal em Campinas",
    subheadline: "Atuação jurídica criminal com experiência, estratégia e acompanhamento responsável em cada etapa do caso.",
    shortDesc: "Atuação jurídica na área criminal, desde fases investigativas e procedimentos policiais até ações penais, audiências e recursos, com acompanhamento técnico e estratégico de cada etapa do caso.",
    fullDesc: "Com mais de cinco décadas de atuação ininterrupta na área penal em Campinas e nos tribunais paulistas e federais, o Said & Said Advogados Associados presta assistência jurídica altamente qualificada em matérias criminais. Nossa abordagem privilegia a defesa intransigente das garantias constitucionais, a análise minuciosa de elementos de prova e a construção de teses sólidas e personalizadas.",
    howWeAct: "A atuação criminal da banca é exercida de forma contínua e dedicada, compreendendo desde a orientação preventiva até a sustentação oral perante as cortes superiores. Sob a condução do Dr. José Pedro Said Junior, cada caso recebe tratamento individualizado, com presença direta dos advogados em atos policiais, audiências de custódia, oitivas e sessões de julgamento.",
    situations: [
      "Inquéritos policiais e investigações no âmbito da Polícia Civil e da Polícia Federal",
      "Defesa técnica em ações penais na Justiça Estadual e na Justiça Federal",
      "Crimes contra a ordem econômica, tributária e sistema financeiro nacional",
      "Crimes contra o patrimônio, a administração pública e a honra",
      "Habeas corpus e medidas cautelares perante Tribunais de Justiça, STJ e STF",
      "Acompanhamento em audiências de custódia e pedidos de liberdade provisória"
    ],
    processSteps: [
      {
        step: "01",
        title: "Primeiro contato",
        desc: "Atendimento inicial confidencial para compreender a natureza do procedimento policial ou processo em curso."
      },
      {
        step: "02",
        title: "Compreensão da demanda",
        desc: "Coleta imediata dos autos, verificação do estado processual e análise dos atos praticados pela autoridade competente."
      },
      {
        step: "03",
        title: "Análise jurídica",
        desc: "Exame minucioso da tipicidade, validade das provas, jurisprudência aplicável e identificação de eventuais nulidades."
      },
      {
        step: "04",
        title: "Definição da estratégia adequada",
        desc: "Apresentação da linha defensiva ao cliente, estruturação de peças e acompanhamento contínuo dos atos processuais."
      }
    ],
    differentials: [
      "Tradição de mais de 50 anos em casos criminais complexos em Campinas",
      "Atuação direta e pessoal dos sócios em todas as diligências investigatórias",
      "Sigilo absoluto e discrição na proteção do nome e imagem do constituinte",
      "Experiência com teses perante o Tribunal de Justiça de São Paulo, STJ e STF"
    ],
    faq: [
      {
        q: "O que fazer ao ser intimado para comparecer a uma delegacia de polícia?",
        a: "A orientação prudente é contatar imediatamente um advogado antes de prestar qualquer declaração. O defensor analisará o inquérito policial para assegurar o respeito integral aos seus direitos constitucionais."
      },
      {
        q: "O escritório atua em prisões em flagrante e audiências de custódia?",
        a: "Sim. O escritório atua em situações de urgência, acompanhando a lavratura do auto de prisão em flagrante e defendendo a liberdade do cliente na respectiva audiência de custódia."
      },
      {
        q: "Qual é a atuação do escritório em casos de crimes econômicos e empresariais?",
        a: "Atuamos na defesa de executivos, administradores e empresas em procedimentos que investigam crimes contra a ordem tributária, o sistema financeiro e a concorrência."
      },
      {
        q: "Como é resguardado o sigilo durante o processo criminal?",
        a: "O sigilo profissional do advogado é inviolável por lei. Todo o material probatório e as informações compartilhadas são mantidos sob rigorosa confidencialidade."
      },
      {
        q: "O escritório atua em tribunais superiores em Brasília?",
        a: "Sim. Interpomos e acompanhamos recursos ordinários, recursos especiais, recursos extraordinários e habeas corpus perante o Superior Tribunal de Justiça e o Supremo Tribunal Federal."
      }
    ]
  },
  {
    slug: "direito-trabalhista",
    path: "/servicos/direito-trabalhista",
    title: "Direito Trabalhista",
    seoH1: "Direito Trabalhista em Campinas",
    subheadline: "Consultoria preventiva e defesa estratégica em reclamações trabalhistas e relações de trabalho.",
    shortDesc: "Atuação em questões relacionadas às relações de trabalho, com análise jurídica das demandas e acompanhamento de processos e conflitos trabalhistas.",
    fullDesc: "O Direito Trabalhista exige equilíbrio entre segurança jurídica e conformidade regulatória. O Said & Said Advogados Associados atua na orientação preventiva de empregadores e gestores, bem como no patrocínio contencioso em reclamações trabalhistas que envolvam verbas controversas, estabilidades e litígios de alta complexidade na 15ª Região da Justiça do Trabalho.",
    howWeAct: "Trabalhamos na identificação precoce de passivos e riscos trabalhistas, prestando consultoria em contratos de trabalho, rescisões e negociações coletivas. No contencioso, conduzimos defesas sólidas com produção probatória técnica em primeira instância e recursos perante o Tribunal Regional do Trabalho da 15ª Região e o TST.",
    situations: [
      "Defesa patronal em reclamações trabalhistas individuais e ações coletivas",
      "Auditoria jurídica preventiva nas rotinas e contratos de trabalho",
      "Controvérsias sobre horas extraordinárias, equiparação salarial e cargos de confiança",
      "Discussões sobre adicionais de periculosidade, insalubridade e acidentes de trabalho",
      "Acompanhamento em fiscalizações e termos de ajustamento com o Ministério Público do Trabalho",
      "Negociações coletivas, convenções sindicais e mediação de conflitos laborais"
    ],
    processSteps: [
      {
        step: "01",
        title: "Primeiro contato",
        desc: "Recepção dos dados do caso ou notificação judicial recebida pela empresa ou trabalhador."
      },
      {
        step: "02",
        title: "Compreensão da demanda",
        desc: "Coleta dos documentos trabalhistas pertinentes, cartões de ponto, recibos e histórico contratual."
      },
      {
        step: "03",
        title: "Análise jurídica",
        desc: "Cálculo técnico preliminar das verbas pleiteadas e confronto com os entendimentos consolidados do TRT-15 e TST."
      },
      {
        step: "04",
        title: "Definição da estratégia adequada",
        desc: "Elaboração de contestação técnica, audiência instrutória e avaliação ponderada de conciliação segura quando cabível."
      }
    ],
    differentials: [
      "Conhecimento aprofundado da jurisprudência do TRT da 15ª Região com sede em Campinas",
      "Abordagem preventiva focada em mitigar custos operacionais e passivos futuros",
      "Rigor técnico na confecção de quesitos e acompanhamento de perícias técnicas",
      "Atendimento direto com os advogados encarregados da defesa"
    ],
    faq: [
      {
        q: "Como o escritório auxilia na prevenção de passivos trabalhistas?",
        a: "Realizamos auditorias nas rotinas da empresa, revisando contratos, jornadas, benefícios e políticas internas para adequá-las às normas legais vigentes."
      },
      {
        q: "O escritório atua na defesa de empresas notificadas pelo Ministério Público do Trabalho?",
        a: "Sim. Acompanhamos inquéritos civis, elaboramos manifestações técnicas e prestamos assessoria em reuniões conciliatórias e termos de ajustamento de conduta."
      },
      {
        q: "Qual é a importância da atuação na audiência trabalhista?",
        a: "A audiência é o momento crucial de produção da prova testemunhal e pericial. A preparação prévia das partes e testemunhas é determinante para o resultado seguro do processo."
      },
      {
        q: "O escritório atende demandas envolvendo altos executivos e diretores?",
        a: "Sim. Assessoramos contratações de alta gestão, cláusulas de não concorrência, sigilo e planos de remuneração variável."
      },
      {
        q: "Como são tratados os acordos trabalhistas?",
        a: "Toda proposta de acordo é analisada sob rigorosa ótica de custo versus risco, garantindo que qualquer transação proporcione quitação plena e segurança jurídica definitiva."
      }
    ]
  },
  {
    slug: "contencioso-civil-e-comercial",
    path: "/servicos/contencioso-civil-e-comercial",
    title: "Contencioso Civil e Comercial",
    seoH1: "Contencioso Civil e Comercial em Campinas",
    subheadline: "Soluções jurídicas para disputas contratuais, societárias, imobiliárias e patrimoniais complexas.",
    shortDesc: "Atuação em conflitos e demandas judiciais de natureza civil e comercial, buscando compreender cada situação e estruturar a estratégia jurídica adequada ao caso.",
    fullDesc: "Disputas civis e empresariais exigem clareza analítica, conhecimento dogmático aprofundado e capacidade estratégica na gestão de riscos financeiros. O Said & Said Advogados Associados patrocina interesses de pessoas físicas e jurídicas em ações indenizatórias, cobranças de títulos, litígios contratuais e divergências societárias em todo o Estado de São Paulo.",
    howWeAct: "Conduzimos cada litígio cível de forma personalizada, evitando abordagens genéricas. Avaliamos a viabilidade fática e jurídica da demanda antes do ajuizamento ou da contestação, com ênfase na preservação patrimonial e na proteção da estabilidade comercial do cliente.",
    situations: [
      "Inadimplemento contratual, rescisões forçadas e cobrança de multas indenizatórias",
      "Disputas societárias entre sócios, apuração de haveres e dissoluções parciais",
      "Ações de cobrança, execução de títulos extrajudiciais e recuperação de créditos",
      "Demandas imobiliárias, rescisões de promessas de compra e venda e locações comerciais",
      "Ações indenizatórias por perdas e danos, danos emergentes e lucros cessantes",
      "Medidas judiciais cautelares de urgência e arresto de bens"
    ],
    processSteps: [
      {
        step: "01",
        title: "Primeiro contato",
        desc: "Identificação da controvérsia contratual, societária ou patrimonial trazida pelo cliente."
      },
      {
        step: "02",
        title: "Compreensão da demanda",
        desc: "Leitura exaustiva dos contratos celebrados, aditivos, notificações extrajudiciais e trocas de mensagens."
      },
      {
        step: "03",
        title: "Análise jurídica",
        desc: "Avaliação dogmática das obrigações contratuais, riscos de sucumbência e jurisprudência dos tribunais estaduais."
      },
      {
        step: "04",
        title: "Definição da estratégia adequada",
        desc: "Escolha entre negociação prévia orientada ou ingresso imediato com a medida processual cabível."
      }
    ],
    differentials: [
      "Atuação voltada para a efetiva preservação patrimonial dos constituintes",
      "Redação artesanal de petições com fundamentação doutrinária consistente",
      "Acompanhamento presencial de diligências periciais e audiências de instrução",
      "Mais de 50 anos de credibilidade perante a magistratura paulista"
    ],
    faq: [
      {
        q: "Como o escritório avalia a viabilidade de uma ação de cobrança ou execução?",
        a: "Realizamos uma pesquisa prévia sobre a existência de títulos exigíveis e a solidez patrimonial da contraparte para evitar execuções inócuas."
      },
      {
        q: "É possível solucionar divergências societárias sem recorrer imediatamente à via judicial?",
        a: "Sim. Muitas vezes a mediação e a renegociação amigável dos termos societários preservam a continuidade da empresa e geram desfecho mais vantajoso."
      },
      {
        q: "Como atuam em disputas de contratos imobiliários em Campinas?",
        a: "Assessoramos casos de atraso na entrega de obras, vícios de construção, desapropriações, renovatórias de locação comercial e despejos."
      },
      {
        q: "Qual é o procedimento adotado em casos de quebra contratual?",
        a: "Notificamos extrajudicialmente a parte inadimplente para constituí-la em mora e, persistindo a falta, ingressamos com a rescisão ou cobrança correspondente."
      },
      {
        q: "Como é calculada a indenização em litígios comerciais?",
        a: "A indenização é baseada na comprovação documental de perdas reais e lucros cessantes, submetida quando necessário a perícia contábil especializada."
      }
    ]
  },
  {
    slug: "familia-e-sucessoes",
    path: "/servicos/familia-e-sucessoes",
    title: "Família e Sucessões",
    seoH1: "Família e Sucessões em Campinas",
    subheadline: "Orientação cuidadosa, planejamento sucessório e condução de inventários com máxima discrição.",
    shortDesc: "Atuação jurídica em questões relacionadas às relações familiares, patrimônio, sucessões e demais demandas que exigem orientação jurídica cuidadosa.",
    fullDesc: "As relações de família e a transmissão patrimonial exigem equilíbrio entre rigor técnico e sensibilidade humana. O Said & Said Advogados Associados conduz inventários, partilhas, planejamentos sucessórios e dissoluções matrimoniais com discrição absoluta, buscando resguardar a harmonia familiar e a integridade do patrimônio edificado ao longo de gerações.",
    howWeAct: "Prestamos assessoria tanto em procedimentos extrajudiciais céleres perante cartórios de notas quanto em processos judiciais de alta complexidade. Priorizamos a clareza e a transparência em cada deliberação, evitando desgastes desnecessários e conferindo segurança jurídica aos herdeiros e cônjuges.",
    situations: [
      "Inventários judiciais e extrajudiciais com partilha amigável ou litigiosa de bens",
      "Planejamento sucessório, testamentos, doações com cláusulas de usufruto e inalienabilidade",
      "Divórcios consensuais e litigiosos, com partilha de patrimônio e definição de pensão",
      "Elaboração de pactos antenupciais e contratos de convivência em união estável",
      "Ações de alimentos, fixação, revisão, exoneração e execução de pensão alimentícia",
      "Ações de interdição, tutela e curatela de pessoas vulneráveis"
    ],
    processSteps: [
      {
        step: "01",
        title: "Primeiro contato",
        desc: "Acolhimento da demanda com escuta atenta e sigilo absoluto sobre os laços familiares e patrimoniais."
      },
      {
        step: "02",
        title: "Compreensão da demanda",
        desc: "Levantamento documental da certidão de óbito ou casamento, escrituras imobiliárias e declarações de bens."
      },
      {
        step: "03",
        title: "Análise jurídica",
        desc: "Verificação da incidência tributária de ITCMD, meação, quinhões hereditários e alternativas menos onerosas."
      },
      {
        step: "04",
        title: "Definição da estratégia adequada",
        desc: "Condução em cartório extrajudicial sempre que cabível ou ajuizamento da ação com foco em desfecho justo."
      }
    ],
    differentials: [
      "Discrição absoluta no tratamento das intimidades familiares e patrimoniais",
      "Experiência com inventários de grandes patrimônios e participações societárias",
      "Prevenção ativa de litígios por meio de planejamento sucessório transparente",
      "Atendimento próximo e humanizado pelos sócios seniores da banca"
    ],
    faq: [
      {
        q: "Quando é possível realizar o inventário diretamente em cartório de notas?",
        a: "O inventário extrajudicial pode ser feito quando todos os herdeiros forem maiores, capazes e estiverem em pleno acordo quanto à partilha dos bens, observados os requisitos da lei."
      },
      {
        q: "O que é planejamento sucessório e quais são suas vantagens?",
        a: "É a organização jurídica antecipada da transmissão dos bens, evitando conflitos familiares futuros e reduzindo custos cartorários e tributários de forma legal."
      },
      {
        q: "Qual é o prazo legal para a abertura de um processo de inventário?",
        a: "A legislação processual civil prevê o prazo de 60 dias a contar da data do falecimento para iniciar o procedimento e evitar multas tributárias estaduais."
      },
      {
        q: "Como funciona a divisão de bens em caso de divórcio?",
        a: "A divisão depende do regime de bens adotado no casamento ou união estável (comunhão parcial, comunhão universal ou separação total), ressalvados bens particulares."
      },
      {
        q: "Como o escritório atua em disputas sobre guarda e pensão alimentícia?",
        a: "Atuamos com foco primordial no melhor interesse das crianças e adolescentes envolvidos, buscando parâmetros justos de convivência e proporcionalidade financeira."
      }
    ]
  },
  {
    slug: "direito-tributario",
    path: "/servicos/direito-tributario",
    title: "Direito Tributário",
    seoH1: "Direito Tributário em Campinas",
    subheadline: "Defesa técnica contra autuações fiscais, execuções e planejamento tributário em estrita conformidade.",
    shortDesc: "Atuação em questões relacionadas à legislação tributária, obrigações fiscais, conflitos e demandas envolvendo relações entre contribuintes e Administração Pública.",
    fullDesc: "A complexidade da legislação tributária brasileira impõe riscos diários a empresas e cidadãos. O Said & Said Advogados Associados atua no contencioso tributário judicial e administrativo, combatendo cobranças indevidas de tributos municipais, estaduais e federais, bem como prestando consultoria focada em legalidade e segurança financeira.",
    howWeAct: "Analisamos minuciosamente autos de infração e execuções fiscais para identificar vícios formais, decadência, prescrição ou inconstitucionalidades de cobrança. Atuamos perante as delegacias de julgamento, conselhos de contribuintes municipais e estaduais, CARF e varas da Fazenda Pública.",
    situations: [
      "Defesa contra autos de infração de tributos federais, estaduais (ICMS) e municipais (ISS e IPTU)",
      "Embargos à execução fiscal e exceções de pré-executividade para desbloqueio de bens e contas",
      "Ações anulatórias de débitos fiscais e ações declaratórias de inexistência de relação jurídico-tributária",
      "Mandados de segurança para obtenção de certidões negativas de débito (CND ou CPEN)",
      "Recuperação e compensação de tributos recolhidos indevidamente ou a maior",
      "Orientação jurídica sobre estruturação tributária de operações societárias e comerciais"
    ],
    processSteps: [
      {
        step: "01",
        title: "Primeiro contato",
        desc: "Recepção da intimação fiscal, auto de infração ou citação em execução fiscal."
      },
      {
        step: "02",
        title: "Compreensão da demanda",
        desc: "Exame das certidões de dívida ativa, relatórios contábeis e demonstrativos fiscais da empresa."
      },
      {
        step: "03",
        title: "Análise jurídica",
        desc: "Estudo da conformidade da cobrança frente ao Código Tributário Nacional e precedentes vinculantes do STJ e STF."
      },
      {
        step: "04",
        title: "Definição da estratégia adequada",
        desc: "Elaboração de impugnação administrativa tempestiva ou ajuizamento de medida judicial com pedido liminar."
      }
    ],
    differentials: [
      "Histórico de mais de 50 anos em defesas tributárias de empresas do interior paulista",
      "Atuação ágil na liberação de certidões e desbloqueio de recursos indispensáveis à atividade",
      "Domínio dos regimes de tributação e da jurisprudência consolidada dos tribunais superiores",
      "Avaliação honesta dos riscos envolvidos em cada tese defendida"
    ],
    faq: [
      {
        q: "Como proceder ao receber uma citação de execução fiscal?",
        a: "O prazo para manifestação ou garantia do juízo é curto. É fundamental procurar a orientação de um advogado para avaliar a possibilidade de exceção de pré-executividade ou embargos."
      },
      {
        q: "É possível suspender a exigibilidade de um tributo enquanto se discute sua validade?",
        a: "Sim. A legislação prevê hipóteses como o depósito judicial do montante integral, a concessão de liminar em mandado de segurança ou tutela de urgência em ação anulatória."
      },
      {
        q: "Qual é o papel da defesa no processo administrativo tributário?",
        a: "A defesa administrativa permite impugnar o débito antes que ele seja inscrito em dívida ativa, suspendendo a cobrança sem a necessidade de garantia imediata de bens."
      },
      {
        q: "Como funciona a repetição de indébito tributário?",
        a: "O contribuinte que pagou tributo indevido ou a maior tem direito a pleitear a restituição ou a compensação dos valores recolhidos nos últimos cinco anos."
      },
      {
        q: "O escritório atua na regularização fiscal para viabilizar certidões?",
        a: "Sim. Trabalhamos na análise de pendências e adoção das providências necessárias para a emissão de certidões de regularidade fiscal perante a União, Estado e Município."
      }
    ]
  },
  {
    slug: "direito-administrativo",
    path: "/servicos/direito-administrativo",
    title: "Direito Administrativo",
    seoH1: "Direito Administrativo em Campinas",
    subheadline: "Segurança jurídica em relações com o Poder Público, licitações, contratos e defesas disciplinares.",
    shortDesc: "Atuação jurídica em questões envolvendo a Administração Pública, atos administrativos, relações com o Poder Público e demandas de natureza administrativa.",
    fullDesc: "As relações com a Administração Pública exigem estrito respeito aos princípios da legalidade, moralidade, impessoalidade e publicidade. O Said & Said Advogados Associados presta consultoria e patrocínio contencioso a pessoas físicas e jurídicas em procedimentos licitatórios, contratos administrativos, impugnações e processos sancionadores.",
    howWeAct: "Assessoramos empresas em todas as fases das concorrências e pregões públicos, desde a análise de editais até a interposição de recursos administrativos e mandados de segurança. Também atuamos na defesa de servidores públicos e particulares perante órgãos de controle e Tribunais de Contas.",
    situations: [
      "Assessoria em licitações públicas, pregões eletrônicos e concorrências",
      "Impugnação a editais de licitação com exigências restritivas ou ilegais",
      "Recursos administrativos e representações perante comissões e Tribunais de Contas",
      "Reequilíbrio econômico-financeiro de contratos administrativos e repactuações",
      "Defesa em processos administrativos disciplinares (PAD) e sindicâncias de servidores",
      "Defesa em ações civis públicas e processos de apuração de responsabilidade"
    ],
    processSteps: [
      {
        step: "01",
        title: "Primeiro contato",
        desc: "Análise do ato administrativo, publicação de edital ou notificação oficial do órgão público."
      },
      {
        step: "02",
        title: "Compreensão da demanda",
        desc: "Verificação dos termos do instrumento convocatório, prazos preclusivos e histórico contratual."
      },
      {
        step: "03",
        title: "Análise jurídica",
        desc: "Avaliação da legalidade do ato à luz da Lei de Licitações (Lei nº 14.133/2021) e da jurisprudência correlata."
      },
      {
        step: "04",
        title: "Definição da estratégia adequada",
        desc: "Apresentação tempestiva de recurso administrativo fundamentado ou impetração de mandado de segurança."
      }
    ],
    differentials: [
      "Atuação técnica fundamentada nos preceitos da Nova Lei de Licitações e Contratos",
      "Amplo conhecimento da dinâmica administrativa nos municípios da Região Metropolitana de Campinas",
      "Defesa intransigente do contraditório e da ampla defesa em processos disciplinares",
      "Mais de 50 anos de solidez e reputação ilibada perante as instâncias públicas"
    ],
    faq: [
      {
        q: "Como o escritório pode auxiliar uma empresa durante uma licitação pública?",
        a: "Auxiliamos na conferência da documentação de habilitação, análise prévia de riscos do edital, formulação de pedidos de esclarecimento e impugnações a exigências ilegais."
      },
      {
        q: "Quando cabe pedido de reequilíbrio econômico-financeiro em contratos públicos?",
        a: "Cabe quando ocorrem fatos imprevisíveis ou previsíveis de consequências incalculáveis que tornam a execução do contrato excessivamente onerosa para o contratado."
      },
      {
        q: "Como funciona a defesa de servidores em Processos Administrativos Disciplinares (PAD)?",
        a: "Acompanhamos todos os atos do processo, assegurando a oportunidade de produzir provas, arrolar testemunhas e demonstrar a correta conduta funcional do servidor."
      },
      {
        q: "Qual é o papel do mandado de segurança no Direito Administrativo?",
        a: "O mandado de segurança destina-se a proteger direito líquido e certo lesado ou ameaçado de lesão por autoridade pública mediante ato ilegal ou com abuso de poder."
      },
      {
        q: "O escritório atua perante o Tribunal de Contas do Estado de São Paulo (TCE-SP)?",
        a: "Sim. Acompanhamos representações, recursos e prestação de esclarecimentos relativos a contratos e atos sob fiscalização do Tribunal de Contas."
      }
    ]
  }
];

export const HOME_FAQ = [
  {
    q: "Onde fica o Said & Said Advogados Associados?",
    a: "O escritório está localizado no Edifício Mesbla, na Avenida Campos Sales, 715, Centro, Campinas - SP, CEP 13010-081."
  },
  {
    q: "Quais áreas do Direito o escritório atende?",
    a: "O escritório atua em Direito Penal, Direito Trabalhista, Contencioso Civil e Comercial, Família e Sucessões, Direito Tributário e Direito Administrativo."
  },
  {
    q: "O escritório atua na área criminal?",
    a: "Sim. A advocacia criminal é uma das áreas de atuação de destaque do escritório, que possui mais de 50 anos de experiência na área penal."
  },
  {
    q: "Como posso entrar em contato?",
    a: "Você pode entrar em contato diretamente pelo WhatsApp do escritório ou utilizar os canais disponíveis na página de contato."
  },
  {
    q: "O escritório atende apenas clientes de Campinas?",
    a: "O escritório está localizado em Campinas/SP e possui atuação na região. A possibilidade de atendimento em outras localidades deve ser avaliada de acordo com a natureza da demanda."
  },
  {
    q: "Como funciona a primeira conversa com o escritório?",
    a: "O primeiro contato permite compreender, de forma inicial, a natureza da demanda e orientar sobre os próximos passos para avaliação jurídica do caso."
  }
];
