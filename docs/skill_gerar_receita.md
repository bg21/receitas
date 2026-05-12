# Skill: Gerar Receita

Esta skill orienta o assistente a criar um novo arquivo de receita no formato Markdown (Astro Content Collection) seguindo o padrão visual e de estrutura do projeto.

## Instruções para o Assistente

Sempre que o usuário solicitar para "gerar uma nova receita" usando esta skill, siga estes passos:

1. **Coleta de Informações:**
   - Peça o nome da receita.
   - Peça os ingredientes e o modo de preparo (ou peça para você mesmo sugerir com base no nome).
   - Peça a categoria (Aves, Peixes, Carne Suína, etc.).

2. **Geração do Conteúdo:**
   - Use o Frontmatter abaixo como base:
     ```yaml
     ---
     title: "[NOME DA RECEITA]"
     description: "[BREVE DESCRIÇÃO]"
     image: "[URL DA IMAGEM - use Unsplash se necessário]"
     category: "[CATEGORIA]"
     prepTime: "[TEMPO]"
     servings: "[RENDIMENTO]"
     featured: false
     ---
     ```
   - Estruture as seções em `## Ingredientes` e `## Modo de Preparo`.

3. **Salvamento do Arquivo:**
   - O nome do arquivo deve ser o título em "kebab-case" (ex: `frango-com-quiabo.md`).
   - O caminho de destino deve ser: `src/content/recipes/[nome-do-arquivo].md`.

4. **Regra de Estética:**
   - Certifique-se de que a descrição seja atraente.
   - Use imagens de alta qualidade do Unsplash que combinem com a receita.

---
*Para usar esta skill, basta me pedir para "Executar a skill Gerar Receita" ou me dar as informações de uma nova receita.*
