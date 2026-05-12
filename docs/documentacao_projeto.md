# Documentação do Projeto: Minha Receita

Este documento serve como a fonte da verdade e contexto para a aplicação **Minha Receita**. Ele detalha a arquitetura, funcionalidades e padrões de design utilizados no projeto.

## 📋 Visão Geral
A **Minha Receita** é uma plataforma de catálogo de receitas desenvolvida com foco em performance e experiência do usuário, inspirada no design system da Seara. A aplicação permite que usuários explorem diversas receitas, categorizadas por tipo, com detalhes sobre tempo de preparo e rendimento.

---

## 🛠️ Stack Tecnológica
- **Framework**: [Astro](https://astro.build/) (v5.x)
- **Gerenciamento de Conteúdo**: Astro Content Collections (Markdown + Zod Schema)
- **Estilização**: Vanilla CSS com Variáveis CSS (Design Tokens)
- **Tipografia**: Inter (Google Fonts)

---

## 📁 Estrutura de Conteúdo (Receitas)
As receitas são armazenadas como arquivos Markdown em `src/content/recipes/`. Cada arquivo deve seguir o seguinte esquema de metadados (Frontmatter):

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `title` | `string` | Nome da receita |
| `description` | `string` | Breve descrição ou resumo |
| `image` | `string` (opcional) | URL da imagem de destaque |
| `category` | `enum` | Categorias: `Aves`, `Peixes`, `Carne Suína`, `Massas`, `Sobremesas` |
| `prepTime` | `string` | Tempo estimado (ex: "45 min") |
| `servings` | `string` | Quantidade de porções (ex: "4 porções") |
| `featured` | `boolean` | Define se a receita aparece com destaque (padrão: `false`) |
| `tags` | `string[]` | Lista de tags para filtragem (ex: `["Rápido", "Leve"]`) |

---

## 🚀 Funcionalidades Principais

### 1. Página Inicial (Home)
- **Hero Section**: Apresentação visual da marca.
- **Grade de Receitas**: Lista dinâmica de todas as receitas cadastradas na coleção.
- **Cards de Receita**: Componente reutilizável que exibe imagem, categoria (com cor temática), título, descrição curta e metadados rápidos (tempo e porções).

### 2. Página de Detalhes da Receita
- **Cabeçalho Dinâmico**: A cor de fundo do cabeçalho muda conforme a categoria da receita.
- **Informações Detalhadas**: Exibição clara do tempo de preparo e rendimento através de ícones e "pills".
- **Renderização de Conteúdo**: O corpo da receita (ingredientes e modo de preparo) é renderizado a partir do Markdown, com estilos customizados para listas e títulos.

### 3. Página Sobre
- Espaço dedicado à história e propósito da aplicação.

---

## 🎨 Design System & Estilização

### Cores (Design Tokens)
As cores são gerenciadas via variáveis CSS em `src/styles/global.css`:
- `var(--color-primary)`: `#F25D07` (Laranja principal)
- `var(--color-aves)`: `#F25D07`
- `var(--color-peixes)`: `#2E7BB2`
- `var(--color-suina)`: `#E1235D`
- `var(--color-bg)`: `#F7F7F7`

### Componentes UI
- **RecipeCard**: Localizado em `src/components/RecipeCard.astro`. Possui efeitos de hover e transições suaves.
- **Layout Base**: Localizado em `src/layouts/Layout.astro`. Gerencia o Header fixo (Sticky), Footer e metadados SEO.

---

## 🗺️ Arquitetura de Rotas
- `/`: Página principal (Lista de receitas).
- `/receita/[slug]`: Página dinâmica para cada receita.
- `/sobre`: Página institucional.

---

## 🛠️ Arquivos de Suporte e Utilitários
Além do código fonte, o projeto conta com arquivos auxiliares para guiar o desenvolvimento:
- `documentacao_projeto.md`: Este arquivo (Contexto principal).
- `seara_design_system.md`: Detalhamento dos tokens e padrões visuais originais.
- `skill_gerar_receita.md`: Instruções específicas para a IA sobre como formatar e criar novos arquivos de receita.
- `walkthrough_design_system.md`: Guia passo a passo da implementação visual.

---

## 📝 Guia de Implementação (Contexto para IA)
Sempre que for criar uma nova funcionalidade ou modificar uma existente:
1. **Verifique o Schema**: Se for alterar o modelo de dados, atualize `src/content.config.ts`.
2. **Respeite os Tokens**: Use as variáveis CSS definidas em `global.css` para manter a consistência visual.
3. **Padrão Astro**: Utilize componentes `.astro` e aproveite o carregamento de conteúdo via `getCollection`.
4. **Semântica HTML**: Mantenha o uso de tags semânticas para melhor SEO e acessibilidade.
