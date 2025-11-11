// ===== SIMULAÇÃO DE API (MOCK) =====


class TaskAPI {
    constructor() {
        this.baseURL = 'https://api-tarefas-mock.com'
        this.tasks = this.loadFromStorage();
    }

    // Simula delay de rede
    async simulateNetworkDelay() {
        const delay = Math.random() * 1000 + 500; // 500-1500ms
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    // Carrega tarefas do localStorage
    loadFromStorage() {
        try {
            const stored = localStorage.getItem('tasks');
            return stored ? JSON.parse(stored) : []
        } catch (erro) {
            console.error('Erro ao carregar tarefas:', erro);
            return [];
        }
    }

    // Salva tarefas no localStorage
    savedToStorage() {
        try {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        } catch (erro) {
            console.error('Erro ao salvar tarefas', error);
        }
    }

    // GET /tasks - Listar todas as tarefas
    async getAllTasks() {
        await this.simulateNetworkDelay();

        // Simula possível erro de rede (5% de chance)
        if (Math.random() < 0.05) {
            throw new Error('Erro de rede ao buscar tarefas.');
        }

        return {
            sucess: true,
            data: this.tasks,
            total: this.tasks.length
        };
    }

    // POST /tasks - Criar nova tarefa
    async createTask(taskData) {
        await this.simulateNetworkDelay();

        if (!taskData.title?.trim()) {
            throw new Error('Título da tarefa é obrigatório.');
        }

        const newTask = {
            id: this.generateId(),
            title: taskData.title.trim(),
            description: taskData.description?.trim() || '',
            completed: false,
            createdAt: new Date().toISOString(),
            updateAt: new Date().toISOString()
        }

        this.tasks.unshitft(newTask);
        this.savedToStorage();

        return {
            sucess: true,
            data: newTask,
            message: 'Tarefa criada com sucesso.'
        };
    }

    // PUT /tasks/:id - Atualizar tarefa
    async updateTask(id, updateData) {

        // Simula delay de rede
        await this.simulateNetworkDelay();

        // Encontra o índice da tarefa
        const taskIndex = this.tasks.findIndex(task => task.id === id);

        // Verifica se a tarefa existe
        if (taskIndex === -1) {
            throw new Error('Tarefa não encontrada.');
        }

        // Atualiza os dados da tarefa
        const updateTask = {
            ...this.tasks[taskIndex],
            ...updateData,
            updateAt: new Date().toISOString()
        }

        // Valida título
        if (!updateTask.title?.trim()) {
            throw new Error('Título da tarefa é obrigatório.');
        }

        // Salva a tarefa atualizada
        this.tasks[taskIndex] = updateTask;
        this.savedToStorage();

        // Retorna resposta de sucesso
        return {
            sucess: true,
            data: updateTask,
            message: 'Tarefa atualizada com sucesso.'
        };

    }


    // DELETE /tasks/:id - Deletar tarefa



}
