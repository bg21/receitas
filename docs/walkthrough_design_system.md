# Walkthrough: Sistema de Design Seara Minha Receita

Este guia apresenta uma visão detalhada da linguagem visual que extraímos do Seara Minha Receita. O objetivo é garantir que a aplicação tenha uma estética premium, gastronômica e extremamente amigável.

## 1. Identidade Visual e Cores
A paleta foi escolhida para evocar apetite e calor.

*   **Laranja Seara (#F25D07):** É a nossa cor de comando. Ela deve ser usada para elementos que exigem ação imediata ou identificação da marca (Header, botões primários).
*   **Contraste e Acessibilidade:** O uso de cinza escuro (#333333) sobre fundos claros garante que as receitas sejam fáceis de ler, mesmo em dispositivos móveis na cozinha.
*   **Diferenciação por Categoria:** Note que usamos cores específicas para tipos de proteína (Laranja para Aves, Azul para Peixes, Magenta para Suínos). Isso ajuda na navegação visual rápida.

## 2. Tipografia e Legibilidade
A tipografia foca em clareza e hierarquia.

*   **Títulos em Uppercase:** O uso de letras maiúsculas em negrito para títulos de seção ajuda a organizar o conteúdo visualmente "pesado" (muitas imagens e textos).
*   **Espaçamento (Line-height):** Para o modo de preparo, utilizaremos um espaçamento maior para evitar que o usuário se perca entre as linhas enquanto cozinha.

## 3. Componentes Principais

### Cards de Receita
*   **Bordas Arredondadas (24px):** Transmitem suavidade e modernidade.
*   **Imagens em Destaque:** A foto da receita deve ser a "heroína" do card, sem bordas internas, ocupando todo o topo.
*   **Feedback de Hover:** Ao passar o mouse, o card deve ter uma leve elevação (`box-shadow` mais intenso) e um deslocamento vertical sutil (`translateY(-4px)`).

### Botões "Pill"
*   Todos os botões de ação seguem o formato de pílula. Isso reforça a identidade moderna e amigável do sistema.

## 4. Experiência e Interação
*   **Sticky Header:** Essencial para que a busca e o menu estejam sempre acessíveis, já que páginas de receitas tendem a ser longas.
*   **Micro-interações:** Ícones de "favorito" (coração) deve ter transições suaves de cor e escala ao serem clicados.

## 5. Próximos Passos
Com este guia e o arquivo `seara_design_system.md` prontos, podemos:
1.  **Configurar o CSS Global:** Implementar as variáveis (Custom Properties) com esses tokens.
2.  **Criar Componentes Base:** Desenvolver os botões e o grid de cards seguindo essas especificações.
3.  **Montar a Estrutura da Página:** Começar pelo Header e a seção de busca.

---
> [!TIP]
> Ao implementar, priorize o uso de `rem` para tipografia e `px` para arredondamentos fixos, garantindo consistência visual.
