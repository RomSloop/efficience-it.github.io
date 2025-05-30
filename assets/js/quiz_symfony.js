// Liste des catégories et fichiers YAML correspondants
const quizTopics = {
    "automated_tests": {
        title: "Quiz Certification Symfony - Automated Tests",
        yamlFiles: [
            "automated_tests/client_configuration.yaml",
            "automated_tests/client_object.yaml",
            "automated_tests/crawler_object.yaml",
            "automated_tests/framework_objects_access.yaml",
            "automated_tests/functional_tests_with_phpunit.yaml",
            "automated_tests/handling_legacy_deprecated_code.yaml",
            "automated_tests/php_unit_bridge.yaml",
            "automated_tests/profiler_object.yaml",
            "automated_tests/request_and_response_objects_introspection.yaml",
            "automated_tests/unit_tests_with_php_unit.yaml"
        ]
    },
    "console": {
        title: "Quiz Certification Symfony - Console",
        yamlFiles: [
            "Console/built_in_commands.yaml",
            "Console/built_in_helpers.yaml",
            "Console/configuration.yaml",
            "Console/console_events.yaml",
            "Console/custom_commands.yaml",
            "Console/input_and_output_objects.yaml",
            "Console/options_and_arguments.yaml",
            "Console/verbosity_levels.yaml"
        ]
    },
    "controllers": {
        title: "Quiz Certification Symfony - Controllers",
        yamlFiles: [
            "controllers/built_in_internal_controllers.yaml",
            "controllers/file_upload.yaml",
            "controllers/generate404_pages.yaml",
            "controllers/http_redirects.yaml",
            "controllers/internal_redirects.yaml",
            "controllers/the_base_abstract_controller_class.yaml",
            "controllers/the_cookies.yaml",
            "controllers/the_flash_messages.yaml",
            "controllers/the_request.yaml",
            "controllers/the_response.yaml",
            "controllers/the_session.yaml"
        ]
    },
    "data_validation": {
        title: "Quiz Certification Symfony - Data Validation",
        yamlFiles: [
            "data_validation/built_in_validation_constraints.yaml",
            "data_validation/custom_callback_validators.yaml",
            "data_validation/group_sequence.yaml",
            "data_validation/php_object_validation.yaml",
            "data_validation/validation_groups.yaml",
            "data_validation/validation_scopes.yaml",
            "data_validation/violations_builder.yaml"
        ]
    },
    "dependency_injection": {
        title: "Quiz Certification Symfony - Dependency Injection",
        yamlFiles: [
            "dependency_injection/built_in_services.yaml",
            "dependency_injection/compiler_passes.yaml",
            "dependency_injection/configuration_parameters.yaml",
            "dependency_injection/factories.yaml",
            "dependency_injection/semantic_configuration.yaml",
            "dependency_injection/service_container.yaml",
            "dependency_injection/service_decoration.yaml",
            "dependency_injection/services_autowiring.yaml",
            "dependency_injection/services_registration.yaml",
            "dependency_injection/tags.yaml"
        ]
    },
    "forms": {
        title: "Quiz Certification Symfony - Forms",
        yamlFiles: [
            "forms/built_in_form_types.yaml",
            "forms/csrf_protection.yaml",
            "forms/data_transformers.yaml",
            "forms/form_events.yaml",
            "forms/form_type_extensions.yaml",
            "forms/form_types.yaml",
            "forms/forms_creation.yaml",
            "forms/forms_handling.yaml",
            "forms/forms_rendering_with_twig.yaml",
            "forms/forms_theming.yaml",
            "forms/handling_file_upload.yaml"
        ]
    },
    "http": {
        title: "Quiz Certification Symfony - HTTP",
        yamlFiles: [
            "http/caching.yaml",
            "http/client_server_interaction.yaml",
            "http/content_negotiation.yaml",
            "http/cookies.yaml",
            "http/http_methods.yaml",
            "http/http_request.yaml",
            "http/http_response.yaml",
            "http/language_detection.yaml",
            "http/status_codes.yaml",
            "http/symfony_http_client_component.yaml"
        ]
    },
    "http_caching": {
        title: "Quiz Certification Symfony - HTTP Caching",
        yamlFiles: [
            "http_caching/cache_types_browser_proxies_and_reverse_proxies.yaml",
            "http_caching/client_side_caching.yaml",
            "http_caching/edge_side_includes.yaml",
            "http_caching/expiration_expires_cache_control.yaml",
            "http_caching/server_side_caching.yaml",
            "http_caching/validation_e_tag_last_modified.yaml"
        ]
    },
    "miscellaneous": {
        title: "Quiz Certification Symfony - Miscellaneous",
        yamlFiles: [
            "miscellaneous/cache_process_and_serializer_components.yaml",
            "miscellaneous/code_debugging.yaml",
            "miscellaneous/configuration_including_dot_env_and_expression_language_components.yaml",
            "miscellaneous/deployment_best_practices.yaml",
            "miscellaneous/filesystem_and_finder_components.yaml",
            "miscellaneous/internationalization_and_localization_and_intl_component.yaml",
            "miscellaneous/lock_component.yaml",
            "miscellaneous/messenger_component.yaml",
            "miscellaneous/mime_and_mailer_components.yaml",
            "miscellaneous/runtime_component.yaml",
            "miscellaneous/web_profiler_web_debug_toolbar_and_data_collectors.yaml"
        ]
    },
    "security": {
        title: "Quiz Certification Symfony - Security",
        yamlFiles: [
            "security/access_control_rules.yaml",
            "security/authentication.yaml",
            "security/authenticators.yaml",
            "security/authorization.yaml",
            "security/configuration.yaml",
            "security/firewalls.yaml",
            "security/password_hashers.yaml",
            "security/providers.yaml",
            "security/roles.yaml",
            "security/users.yaml",
            "security/voters_and_voting_strategies.yaml"
        ]
    },
    "routing": {
        title: "Quiz Certification Symfony - Routing",
        yamlFiles: [
            "routing/conditional_request_matching.yaml",
            "routing/configuration_yamlxmlphp_and_attributes_annotations.yaml",
            "routing/domain_name_matching.yaml",
            "routing/generate_url_parameters.yaml",
            "routing/http_methods_matching.yaml",
            "routing/restrict_url_parameters.yaml",
            "routing/router_debugging.yaml",
            "routing/set_default_values_to_url_parameters.yaml",
            "routing/trigger_redirects.yaml",
            "routing/user_s_locale_guessing.yaml"
        ]
    },
    "symfony_architecture": {
        title: "Quiz Certification Symfony - Symfony Architecture",
        yamlFiles: [
            "symfony_architecture/backward_compatibility_promise.yaml",
            "symfony_architecture/bridges.yaml",
            "symfony_architecture/code_organization.yaml",
            "symfony_architecture/components.yaml",
            "symfony_architecture/deprecations_best_practices.yaml",
            "symfony_architecture/event_dispatcher_and_kernel_events.yaml",
            "symfony_architecture/framework_interoperability_and_ps_rs.yaml",
            "symfony_architecture/framework_overloading.yaml",
            "symfony_architecture/license.yaml",
            "symfony_architecture/naming_conventions.yaml",
            "symfony_architecture/official_best_practices.yaml",
            "symfony_architecture/release_management.yaml",
            "symfony_architecture/release_management_and_roadmap_schedule.yaml",
            "symfony_architecture/request_handling.yaml",
            "symfony_architecture/symfony_flex.yaml"
        ]
    },
    "templating_with_twig": {
        title: "Quiz Certification Symfony - Templating with Twig",
        yamlFiles: [
            "templating_with_twig/assets_management.yaml",
            "templating_with_twig/auto_escaping.yaml",
            "templating_with_twig/controller_rendering.yaml",
            "templating_with_twig/debugging_variables.yaml",
            "templating_with_twig/filters_and_functions.yaml",
            "templating_with_twig/global_variables.yaml",
            "templating_with_twig/loops_and_conditions.yaml",
            "templating_with_twig/string_interpolation.yaml",
            "templating_with_twig/template_includes.yaml",
            "templating_with_twig/template_inheritance.yaml",
            "templating_with_twig/translations_and_pluralization.yaml",
            "templating_with_twig/twig_syntax_up_to33_version.yaml",
            "templating_with_twig/ur_ls_generation.yaml"
        ]
    },
    "php_and_web_security": {
        title: "Quiz Certification Symfony - PHP and web security",
        yamlFiles: [
            "php_and_web_security/abstract_classes.yaml",
            "php_and_web_security/anonymous_functions_and_closures.yaml",
            "php_and_web_security/exception_and_error_handling.yaml",
            "php_and_web_security/interfaces.yaml",
            "php_and_web_security/namespaces.yaml",
            "php_and_web_security/object_oriented_programming.yaml",
            "php_and_web_security/php_extensions.yaml",
            "php_and_web_security/phpapi_up_to_php81_version.yaml",
            "php_and_web_security/spl.yaml",
            "php_and_web_security/traits.yaml"
        ]
    }
};

// Fonction pour récupérer le paramètre `topic` dans l'URL
function getQueryParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

async function fetchQuestionsFromTopics(topics, isGeneralTraining = false) {
    try {
        const allQuestionsByTopic = await Promise.all(
            topics.map(async (topic) => {
                const yamlFileUrls = quizTopics[topic].yamlFiles.map(file =>
                    `https://raw.githubusercontent.com/efficience-it/certification-symfony/7.0/data/${file}`
                );

                return { topic, questions: (await Promise.all(yamlFileUrls.map(fetchYaml))).flat() };
            })
        );

        const questionsToDisplay = allQuestionsByTopic.flatMap(({ questions }) => questions);

        return isGeneralTraining ? questionsToDisplay : questionsToDisplay.sort(() => Math.random() - 0.5).slice(0, 20);
    } catch (error) {
        console.error("Error loading questions :", error);
        return [];
    }
}

async function fetchYamlFiles(topic) {
    if (!quizTopics[topic]) {
        displayError("Error : Unknown subject.");
        return;
    }

    updatePageTitles(quizTopics[topic].title);
    const questions = await fetchQuestionsFromTopics([topic]);

    questions.length ? displayQuestions(questions) : displayError("No question found.");
}

async function fetchGeneralQuiz() {
    const allTopics = Object.keys(quizTopics);
    const generalQuestions = await fetchQuestionsFromTopics(allTopics, true);

    if (generalQuestions.length) {
        updatePageTitles('Quiz Symfony Certification - General');
        displayQuestions(generalQuestions);
    } else {
        displayError("No question found in general quiz.");
    }
}

async function fetchYaml(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Recovery failed : ${url}`);
        const yamlText = await response.text();
        const jsonData = jsyaml.load(yamlText);
        return jsonData.questions || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

function updatePageTitles(title) {
    document.getElementById("page-title").textContent = title;
    document.getElementById("quiz-title").textContent = title;
}

function displayError(message) {
    document.getElementById("questions-container").innerHTML = `<p class='text-red-600'>${message}</p>`;
}

function displayQuestions(questions) {
    const container = document.getElementById("questions-container");
    container.innerHTML = "";

    questions.sort(() => Math.random() - 0.5).slice(0, 20).forEach((question, index) => {
        container.innerHTML += generateQuestionHTML(question, index);
    });

    document.getElementById("quiz-form").addEventListener("submit", function (event) {
        event.preventDefault();
        checkResponses();
        document.querySelectorAll(".answer-section").forEach(el => el.classList.remove("hidden"));
        window.scrollTo(0, 0);
    });
}

function generateQuestionHTML(question, index) {
    const questionId = `question-${index}`;
    const answers = question.answers || [];
    const inputType = answers.filter(a => a.correct).length > 1 ? "checkbox" : "radio";

    const optionsHTML = answers.map((answer, i) => `
                <div class="answer-item flex items-baseline sm:items-center space-x-2 mb-1">
                    <input class="form-${inputType}" type="${inputType}" name="${questionId}" id="q${index}-option${i}" value="${escapeHTML(answer.value)}">
                    <label for="q${index}-option${i}" class="answer-label break-all sm:break-normal">${escapeHTML(answer.value)}</label>
                </div>`).join("");

    return `
                <div class="mb-4 p-4 border rounded-lg bg-gray-50">
                    <h5 class="question-header flex justify-between items-center font-semibold text-gray-700" 
                        data-answers='${escapeHTML(JSON.stringify(answers.filter(a => a.correct).map(a => a.value)))}'>
                        <span class="question-header-title hyphens-manual break-all sm:break-normal">${escapeHTML(question.question)}</span>
                        <span class="self-end text-sm text-gray-500 cursor-default" title="uuid: ${question.uuid}">ℹ️</span>
                    </h5>
                    <div class="question-body mt-2">
                        <div class="answers-container mt-2">${optionsHTML}</div>
                        <div class="hidden mt-2 p-2 rounded answer-section">
                            <span class="answer-section-text"></span>
                            🔗 <a href="${question.help}" target="_blank" class="text-blue-600 underline">View source</a>
                        </div>
                    </div>
                </div>`;
}

function escapeHTML(text) {
    let escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    escaped = escaped.replace(/`([^`]+)`/g, "<code class='bg-gray-100 text-red-600 font-mono px-1 rounded'>$1</code>");

    return escaped;
}

function checkResponses() {
    let counter = 0;
    document.querySelectorAll(".question-body").forEach((questionBlock) => {
        const questionHeader = questionBlock.closest(".mb-4").querySelector(".question-header");
        const expectedAnswers = JSON.parse(questionHeader.getAttribute("data-answers"));

        const selectedAnswers = Array.from(questionBlock.querySelectorAll(".answers-container input:checked"))
            .map(input => input.value);

        const isCorrect = selectedAnswers.length === expectedAnswers.length &&
            selectedAnswers.every(val => expectedAnswers.includes(val));

        const resultDiv = questionBlock.querySelector(".answer-section");
        const resultInfo = questionBlock.querySelector(".answer-section-text");
        resultDiv.classList.toggle("bg-green-100", isCorrect);
        resultDiv.classList.toggle("text-green-800", isCorrect);
        resultDiv.classList.toggle("bg-red-100", !isCorrect);
        resultDiv.classList.toggle("text-red-800", !isCorrect);
        resultInfo.innerHTML = isCorrect ? "✅ Correct answer(s). " : "❌ Wrong answer(s). ";

        if (isCorrect) counter++;

        // show answer ?
        const answersDiv = questionBlock.querySelectorAll(".answer-item");
        answersDiv.forEach((answerBlock) => {
            const value = answerBlock.querySelector("input").value;
            const isCorrectAnswer = expectedAnswers.includes(value);
            answerBlock.classList.remove("text-green-600");
            answerBlock.classList.remove("text-red-600");
            if (document.getElementById("show-answer").checked) {
                answerBlock.classList.toggle("text-green-600", isCorrectAnswer);
                answerBlock.classList.toggle("text-red-600", !isCorrectAnswer);
            }
        });
    });
    document.getElementById('score').textContent = `${counter}/20`;
}

const topic = getQueryParam("topic");
topic ? fetchYamlFiles(topic) : fetchGeneralQuiz();
