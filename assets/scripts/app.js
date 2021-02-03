const accordionExample = document.getElementById('accordionExample');
console.log(accordionExample);

accordionExample.innerHTML = getFaqListMarkdown(faqData);

function getFaqListMarkdown(faq) {

    // console.log(faq);

    let resultMarkdown = '';

    faq.forEach(faq => {
        resultMarkdown += 
        `<div class="accordion-item">
                    <h2 class="accordion-header" id="${faq.heading}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${faq.collapse}" aria-expanded="true" aria-controls="${faq.collapse}">
                    ${faq.question} 
                    </button>
                    </h2>
            <div id="${faq.collapse}" class="accordion-collapse collapse show" aria-labelledby="${faq.heading}" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                <p>${faq.answer}</p>
                </div>
            </div>
        </div>`;
    })

    return resultMarkdown;
}

