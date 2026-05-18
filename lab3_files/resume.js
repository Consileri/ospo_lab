function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');
    
    // Закрываем все остальные открытые элементы
    document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
    });

    // Если элемент не был активен, открываем его
    if (!isActive) {
        item.classList.add('active');
    }
}

// Можно добавить дополнительную логику инициализации здесь, если потребуется
console.log("Resume logic loaded.");
