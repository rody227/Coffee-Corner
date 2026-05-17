function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight, /* بيجيب آخر الصفحة بالظبط */
        behavior: 'smooth'               /* بيخلي الحركة ناعمة */
    });
}