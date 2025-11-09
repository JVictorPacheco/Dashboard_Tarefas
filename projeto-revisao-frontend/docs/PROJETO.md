# Projeto de Revisão Frontend - Preparação para Entrevista

## Objetivo
Projeto prático para revisar conceitos fundamentais de HTML, CSS e JavaScript, preparando para vaga de Desenvolvedor Full Stack Júnior na 4Tech.

## Projeto Proposto: "Dashboard de Tarefas Pessoais"
Um sistema simples de gerenciamento de tarefas com foco em responsividade e acessibilidade.

## Conceitos a Revisar

### HTML
- [ ] Estrutura semântica (header, nav, main, section, article, footer)
- [ ] Formulários e validação
- [ ] Acessibilidade (ARIA labels, roles)
- [ ] Meta tags para SEO e responsividade

### CSS
- [ ] Layout com Flexbox e Grid
- [ ] Responsividade (mobile-first)
- [ ] Variáveis CSS (custom properties)
- [ ] Animações e transições
- [ ] Metodologia BEM para classes

### JavaScript
- [ ] Manipulação do DOM
- [ ] Event listeners
- [ ] Local Storage
- [ ] Funções puras e clean code
- [ ] Async/await para simulação de APIs
- [ ] Módulos ES6

## Funcionalidades a Implementar
1. **Adicionar tarefa** - Formulário com validação
2. **Listar tarefas** - Layout responsivo em cards
3. **Marcar como concluída** - Toggle com feedback visual
4. **Filtrar tarefas** - Por status (todas, pendentes, concluídas)
5. **Deletar tarefa** - Com confirmação
6. **Persistência** - Local Storage + Simulação de API
7. **Tema escuro/claro** - Toggle de tema
8. **Responsividade** - Mobile, tablet, desktop
9. **API Mock** - Simulação de endpoints REST para CRUD de tarefas
10. **Loading states** - Estados de carregamento durante requisições

## Princípios SOLID a Aplicar
- **S** - Single Responsibility: Cada função tem uma responsabilidade
- **O** - Open/Closed: Extensível sem modificar código existente
- **D** - Dependency Inversion: Não depender de implementações concretas

## Clean Code
- Nomes descritivos para variáveis e funções
- Funções pequenas e focadas
- Evitar aninhamento excessivo
- Comentários apenas quando necessário
- Consistência na formatação

## Estrutura de Arquivos
```
projeto-revisao-frontend/
├── index.html
├── src/
│   ├── components/
│   │   ├── header.html
│   │   └── footer.html
│   ├── styles/
│   │   ├── main.css
│   │   └── responsive.css
│   ├── scripts/
│   │   ├── main.js
│   │   └── utils.js
│   └── assets/
│       ├── images/
│       └── icons/
└── docs/
    └── PROJETO.md
```

## Próximos Passos
1. Implementar estrutura HTML semântica
2. Criar estilos base com mobile-first
3. Adicionar funcionalidades JavaScript
4. Testar responsividade e acessibilidade
5. Refatorar seguindo princípios clean code