# Sistema de Design - Baseado no Seara Minha Receita

Este documento contém as diretrizes de design, tokens e padrões de interface inspirados no site Seara Minha Receita. Ele servirá como base para a criação da nossa aplicação.

## 🎨 Paleta de Cores

As cores transmitem uma sensação quente e convidativa, focada no apelo gastronômico.

*   **Cor Primária (Seara Orange):** `#F25D07`
    *   **Uso:** Cabeçalho (sticky), botões principais, bordas de campos de busca, ícones de utilidade.
*   **Cor de Destaque / Hover:** `#FF6720`
    *   **Uso:** Estados de interação (hover) em elementos interativos, proporcionando um laranja mais vibrante.
*   **Cores Secundárias (Categorias):**
    *   **Aves:** `#F25D07` (Laranja)
    *   **Peixes:** `#2E7BB2` (Azul)
    *   **Carne Suína:** `#E1235D` (Magenta/Vermelho)
*   **Cores de Texto e Fundo:**
    *   **Texto Principal:** `#333333` (Cinza escuro) para máxima legibilidade.
    *   **Texto de Erro/Feedback:** `#E1235D` (Vermelho vivo).
    *   **Fundo da Página (Background):** `#F7F7F7` (Cinza claro).
    *   **Fundo de Cards/Superfícies:** `#FFFFFF` (Branco).

## ✍️ Tipografia

A tipografia deve ser limpa, moderna e amigável.

*   **Família de Fontes Principal:** Sans-serif (ex: Ubuntu, Roboto, Inter ou Montserrat).
*   **Títulos (Headings):**
    *   **Estilo:** Negrito (Bold).
    *   **Transformação:** Frequentemente em **MAIÚSCULAS** (Uppercase) para destacar seções e nomes de receitas.
*   **Corpo de Texto (Body):**
    *   **Estilo:** Peso normal (Regular).
    *   **Espaçamento:** Espaçamento entre linhas (line-height) generoso (ex: 1.5 a 1.6) para facilitar a leitura prolongada de ingredientes e preparo.
*   **Labels e Metadados:**
    *   **Estilo:** Fontes menores, peso médio (Medium).
    *   **Cor:** Cinza médio.
    *   **Uso:** Informações de rendimento, tempo de preparo e rótulos secundários.

## 🔘 Botões e Elementos de Interação

O formato arredondado ("pill") é predominante, criando uma interface amigável.

*   **Formato Padrão (Pill):** Cantos totalmente arredondados (`border-radius: 50px` ou `9999px`).
*   **Botões Principais e de Categoria:** Fundo preenchido com as cores definidas, texto em branco e em negrito.
*   **Botão de Favorito:** Design circular com fundo branco e ícone de coração centralizado.
*   **Efeitos de Hover (Interação):** 
    *   Leve clareamento da cor de fundo (transição suave).
    *   Em cards, aplicação de uma leve elevação (mudança no `box-shadow` e `transform: translateY`).

## 🖼️ Layout e Espaçamento

O layout é limpo, utilizando grids responsivos e forte uso de imagens.

*   **Cards de Conteúdo (Receitas):**
    *   **Bordas:** Arredondadas (aproximadamente `border-radius: 24px`).
    *   **Sombra:** Sombras suaves (`box-shadow`) para criar profundidade contra o fundo cinza claro.
    *   **Imagens:** Ocupam a parte superior do card, com alta qualidade e proporção bem definida.
*   **Grid:** Layout responsivo estruturado em 3 a 4 colunas em telas grandes (desktop), adaptando-se para 1 ou 2 colunas em dispositivos móveis.
*   **Cabeçalho (Header):**
    *   **Comportamento:** Fixo no topo ao rolar a página (Sticky).
    *   **Estilo:** Fundo laranja sólido (`#F25D07`) com leve sombra inferior para destacar do conteúdo.
*   **Rodapé (Footer):**
    *   Dividido visualmente: Uma área superior vibrante (laranja) para redes sociais/logo e uma área inferior (branca) para navegação estruturada em colunas.

## 🚨 Popups, Toasts e Notificações (Feedback)

A comunicação de estado do sistema deve ser clara e imediata.

*   **Estados de Erro (Formulários):**
    *   **Campo:** Fundo alterado para rosa claro e borda vermelha (`#E1235D`).
    *   **Mensagem:** Etiqueta (tag) abaixo do campo, com fundo vermelho, texto branco e cantos arredondados.
*   **Banners de Cookies:** Posicionado no rodapé da tela, seguindo a paleta de cores primária (Laranja/Branco), com botões de ação ("Pill") claros.
*   **Botões Flutuantes (FABs):** Utilizados para utilidades como WhatsApp ou Acessibilidade. Formato circular, fixos no canto inferior da tela.

## 📑 Estrutura de Conteúdo (Página de Detalhes)

Organização pensada para facilitar a experiência culinária do usuário.

*   **Ingredientes:** Apresentados em listas não ordenadas com marcadores circulares simples (`ul > li`).
*   **Modo de Preparo:** Estruturado em listas numeradas (`ol > li`) claras e espaçadas.
*   **Ícones Utilitários:** Pequenos círculos laranjas com ícones (glifos) brancos dentro, usados para representar visualmente "Tempo de Preparo" (relógio) e "Rendimento" (prato/porção).

---
*Nota: Utilize este documento como referência para a criação de componentes (CSS/Tailwind) e estruturação do layout em nosso projeto.*
