import { WorkerUser } from './models.js';

const listaFuncionarios = [
    // Mecânicos
    new WorkerUser("Carlos Mendes", "carlos.mendes@email.com", "senha123", "123.456.789-01", "Especialista em motor e suspensão com 15 anos de experiência.", "Mecânico", 5, "../assets/workerUser/mecanico/carlos_mendes.jpg"),
    new WorkerUser("Ricardo Lima", "ricardo.lima@email.com", "senha456", "234.567.890-12", "Experiência com veículos leves e utilitários. Diagnóstico rápido e preciso.", "Mecânico", 4, "../assets/workerUser/mecanico/ricardo_lima.jpg"),
    new WorkerUser("Fernando Souza", "fernando.souza@email.com", "senha789", "345.678.901-23", "Atendimento a domicílio para pequenos reparos mecânicos.", "Mecânico", 3, "../assets/workerUser/mecanico/fernando_souza.jpg"),

    // Eletricistas
    new WorkerUser("Marcos Pereira", "marcos.pereira@email.com", "eletric123", "456.789.012-34", "Eletricista residencial e predial certificado.", "Eletricista", 5, "../assets/workerUser/eletricista/marcos_pereira.jpg"),
    new WorkerUser("João Batista", "joao.batista@email.com", "eletric456", "567.890.123-45", "Instalação de chuveiros, luminárias e manutenção elétrica geral.", "Eletricista", 4, "../assets/workerUser/eletricista/joao_batista.jpg"),
    new WorkerUser("Tiago Costa", "tiago.costa@email.com", "eletric789", "678.901.234-56", "Serviço rápido e seguro com garantia de qualidade.", "Eletricista", 3, "../assets/workerUser/eletricista/tiago_costa.jpg"),

    // Chaveiros
    new WorkerUser("Bruno Alves", "bruno.alves@email.com", "chave123", "789.012.345-67", "Abertura de portas, cofres e troca de segredos.", "Chaveiro", 4, "../assets/workerUser/chaveiro/bruno_alves.jpg"),
    new WorkerUser("Renato Dias", "renato.dias@email.com", "chave456", "890.123.456-78", "Serviço 24h com atendimento em toda a cidade.", "Chaveiro", 5, "../assets/workerUser/chaveiro/renato_dias.jpg"),
    new WorkerUser("Fábio Martins", "fabio.martins@email.com", "chave789", "901.234.567-89", "Especialista em fechaduras eletrônicas.", "Chaveiro", 3, "../assets/workerUser/chaveiro/fabio_martins.jpg"),

    // Encanadores
    new WorkerUser("José Rocha", "jose.rocha@email.com", "agua123", "012.345.678-90", "Desentupimentos, vazamentos e instalações hidráulicas.", "Encanador", 4, "../assets/workerUser/encanador/jose_rocha.jpg"),
    new WorkerUser("André Gonçalves", "andre.goncalves@email.com", "agua456", "123.987.654-32", "Rápido atendimento emergencial 24h.", "Encanador", 3, "../assets/workerUser/encanador/andre_goncalves.jpg"),
    new WorkerUser("Pedro Henrique", "pedro.henrique@email.com", "agua789", "321.456.987-10", "Mais de 10 anos de experiência em obras residenciais.", "Encanador", 5, "../assets/workerUser/encanador/pedro_henrique.jpg"),

    // Marido de Aluguel
    new WorkerUser("Roberto Silva", "roberto.silva@email.com", "multi123", "231.564.897-01", "Montagem de móveis, reparos elétricos e hidráulicos.", "Marido de Aluguel", 4, "../assets/workerUser/marido_de_aluguel/roberto_silva.jpg"),
    new WorkerUser("Lucas Vieira", "lucas.vieira@email.com", "multi456", "654.123.789-32", "Serviços gerais para o dia a dia da casa.", "Marido de Aluguel", 3, "../assets/workerUser/marido_de_aluguel/lucas_vieira.jpg"),
    new WorkerUser("Paulo Azevedo", "paulo.azevedo@email.com", "multi789", "897.321.654-43", "Atendimento com agendamento ou emergência.", "Marido de Aluguel", 5, "../assets/workerUser/marido_de_aluguel/paulo_azevedo.jpg"),

    // Marcenaria
    new WorkerUser("Eduardo Ramos", "eduardo.ramos@email.com", "madeira123", "765.432.198-76", "Móveis sob medida e reparos em madeira.", "Marcenaria", 4, "../assets/workerUser/marcenaria/eduardo_ramos.jpg"),
    new WorkerUser("Rafael Moreira", "rafael.moreira@email.com", "madeira456", "876.543.219-87", "Experiência com móveis planejados e restauração.", "Marcenaria", 5, "../assets/workerUser/marcenaria/rafael_moreira.jpg"),
    new WorkerUser("Diego Lopes", "diego.lopes@email.com", "madeira789", "987.654.321-98", "Projetos personalizados para residências e escritórios.", "Marcenaria", 3, "../assets/workerUser/marcenaria/diego_lopes.jpg"),

    // Hidráulica
    new WorkerUser("Henrique Duarte", "henrique.duarte@email.com", "hidro123", "345.789.012-65", "Reparos e instalação de sistemas hidráulicos.", "Hidráulica", 4, "../assets/workerUser/hidraulica/henrique_duarte.jpg"),
    new WorkerUser("Leandro Silva", "leandro.silva@email.com", "hidro456", "456.890.123-76", "Atendimento residencial e comercial.", "Hidráulica", 2, "../assets/workerUser/hidraulica/leandro_silva.jpg"),
    new WorkerUser("Adriano Pires", "adriano.pires@email.com", "hidro789", "567.901.234-87", "Detecção e correção de vazamentos.", "Hidráulica", 5, "../assets/workerUser/hidraulica/adriano_pires.jpg"),

    // Alvenaria
    new WorkerUser("Wagner Souza", "wagner.souza@email.com", "alvenaria123", "678.012.345-98", "Construção e reformas com acabamento de qualidade.", "Alvenaria", 4, "../assets/workerUser/alvenaria/wagner_souza.jpg"),
    new WorkerUser("Jorge Nascimento", "jorge.nascimento@email.com", "alvenaria456", "789.123.456-09", "Serviços de reboco, assentamento e estrutura.", "Alvenaria", 3, "../assets/workerUser/alvenaria/jorge_nascimento.jpg"),
    new WorkerUser("Sandro Cardoso", "sandro.cardoso@email.com", "alvenaria789", "890.234.567-10", "Equipe experiente e obra limpa.", "Alvenaria", 5, "../assets/workerUser/alvenaria/sandro_cardoso.jpg"),

    // Pintura
    new WorkerUser("Luciano Barros", "luciano.barros@email.com", "pintura123", "901.345.678-21", "Pintura interna e externa com acabamento fino.", "Pintura", 4, "../assets/workerUser/pintura/luciano_barros.jpg"),
    new WorkerUser("Vinícius Teixeira", "vinicius.teixeira@email.com", "pintura456", "012.456.789-32", "Uso de tintas de alta durabilidade.", "Pintura", 2, "../assets/workerUser/pintura/vinicius_teixeira.jpg"),
    new WorkerUser("Caio Almeida", "caio.almeida@email.com", "pintura789", "123.567.890-43", "Pintura decorativa e textura.", "Pintura", 5, "../assets/workerUser/pintura/caio_almeida.jpg"),

    // Frete
    new WorkerUser("Márcio Tavares", "marcio.tavares@email.com", "frete123", "234.678.901-54", "Fretes locais com agilidade e cuidado.", "Frete", 4, "../assets/workerUser/frete/marcio_tavares.jpg"),
    new WorkerUser("Cláudio Ferreira", "claudio.ferreira@email.com", "frete456", "345.789.012-65", "Carretos e mudanças com equipe qualificada.", "Frete", 3, "../assets/workerUser/frete/claudio_ferreira.jpg"),
    new WorkerUser("Gilmar Santos", "gilmar.santos@email.com", "frete789", "456.890.123-76", "Disponível todos os dias, inclusive fins de semana.", "Frete", 5, "../assets/workerUser/frete/gilmar_santos.jpg"),
];

export { listaFuncionarios };
