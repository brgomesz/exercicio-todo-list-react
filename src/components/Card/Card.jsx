import React, { useState } from "react";
import "./Card.css";
import Switch from "../Switch/Switch";
import BotaoGithub from "../Botao/BotaoGithub";
import BotaoLinkedin from "../Botao/BotaoLinkedin";

function Card({ toggleBackground }) {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (inputValue.trim()) {
      if (editingIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editingIndex ? inputValue : task
        );
        setTasks(updatedTasks);
        setEditingIndex(null);
      } else {
        setTasks([inputValue, ...tasks]);
      }
      setInputValue("");
    }
  };

  const handleEditTask = (index) => {
    setInputValue(tasks[index]);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="card">
      <div className="titulo">To do list</div>
      <div className="componente">
        <Switch onToggle={toggleBackground} />
      </div>
      <div className="card-adicionar">
        <div>
          <input
            placeholder="Adicione uma tarefa"
            className="input-adicionar"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div>
          <button className="botao-adicionar" onClick={handleAddTask}>
            {editingIndex !== null ? "Salvar" : "Adicionar"}
          </button>
        </div>
      </div>
      <div className="card-respostas">
        {tasks.map((task, index) => (
          <div key={index} className="tarefa">
            {task}
            <div className="botoes-tarefa">
              <button
                className="botao-editar"
                onClick={() => handleEditTask(index)}
              >
                ✏️
              </button>
              <button
                className="botao-excluir"
                onClick={() => handleDeleteTask(index)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="card-botoes">
        <span>Acesse minhas redes:</span>
        <div className="card-botoes-botoes">
          <BotaoGithub />
          <BotaoLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Card;
