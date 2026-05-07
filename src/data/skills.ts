import { Skill } from "@/types";
export const skills: Skill[] = [
  {
    "id": "html",
    "group": "JavaScript Development",
    "name": "HTML",
    "description": "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
    "A1": {
      "level": "Intermediate",
      "description": "- Markup essentials: Has understanding about code organization (notation, hierarchy,  dependencies)\n - HTML / Basic knowledge \n - HTML / DOM structure\n - HTML / HTML5 capabilities \n - HTML coding principles: Knows how to apply technology specific language  in testing efforts (automation, processing). Can modify base code in order to  speed up testing. Can create HTML files and incorporate them into project  repository.\n - HTML / Page structure: Root HTML tags, Tree model, Basic HTML elements (headers, listings, links, rare tags and etc.), HTML tag attributes\n - HTML / Metadata, Styles, Scripts: Meta tags and page encoding,  Add inline styles, include internal and external CSS, Include internal and external scripts, Meta viewport property \n - HTML / Layout and text formatting tags: Layout tags, HTML 5 structural and semantic tags, Formatting tags (bold, italic, upper & lower cases, etc.)\n - HTML / Table, Form, Input Tags, Table layout tags, Table attributes, Form tags & attributes, Input types, HTML 5 input types, Root HTML tags, Tree model.",
      "type": "Core"
    },
    "A2": {
      "level": "Advanced",
      "description": "- HTML  coding principles: \n - Knows how to apply technology specific language in testing efforts (automation, processing).\n - Can modify base code in order to speed up testing.\n - Can create HTML files and incorporate them into the project repository.\n - CSS\\HTML coding principles: \n - Knows how to apply technology specific language in testing efforts (automation, processing).\n - Can modify base code in order to speed up testing.\n - Can create CSS\\HTML files and incorporate them into project repository.   \n - Include internal and external Script.\n - Add inline styles, include internal and external CSS.\n - HTML 5 input types",
      "type": "Core"
    },
    "A3": {
      "level": "Advanced",
      "description": "- HTML  coding principles: \n - Knows how to apply technology specific language in testing efforts (automation, processing).\n - Can modify base code in order to speed up testing.\n - Can create HTML files and incorporate them into the project repository.\n - CSS\\HTML coding principles: \n - Knows how to apply technology specific language in testing efforts (automation, processing).\n - Can modify base code in order to speed up testing.\n - Can create CSS\\HTML files and incorporate them into project repository.   \n - Include internal and external Script.\n - Add inline styles, include internal and external CSS.\n - HTML 5 input types",
      "type": "Core"
    }
  },
  {
    "id": "css",
    "group": "JavaScript Development",
    "name": "CSS",
    "description": "CSS is a style sheet language. Stands for \"Cascading Style Sheet.\" Cascading style sheets are used to format the layout of Web pages. They can be used to define text styles, table sizes, and other aspects of Web pages that previously could only be defined in a page's HTML.",
    "A1": {
      "level": "Intermediate",
      "description": "- ability to build responsive layouts using flexbox and grid with common breakpoints\n - ability to use the cascade, specificity, and inheritance to resolve style conflicts\n - knowledge of pseudo-classes, pseudo-elements, and common layout properties for interactive interfaces\n - ability to debug styling issues by using browser developer tools and inspecting computed styles",
      "type": "Core"
    },
    "A2": {
      "level": "Advanced",
      "description": "- ability to design maintainable style architectures using naming conventions, modular files, and reusable patterns\n - knowledge of advanced layout behavior, stacking contexts, positioning, and overflow control\n - ability to implement CSS custom properties and consistent theming across multiple components\n - ability to optimize styles for performance, maintainability, and cross-browser behavior",
      "type": "Core"
    },
    "A3": {
      "level": "Advanced",
      "description": "- ability to design maintainable style architectures using naming conventions, modular files, and reusable patterns\n - knowledge of advanced layout behavior, stacking contexts, positioning, and overflow control\n - ability to implement CSS custom properties and consistent theming across multiple components\n - ability to optimize styles for performance, maintainability, and cross-browser behavior",
      "type": "Core"
    }
  },
  {
    "id": "javascript",
    "group": "JavaScript Development",
    "name": "JavaScript",
    "description": "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.\nAlongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.Over 97% of websites use it client-side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.",
    "A1": {
      "level": "Intermediate",
      "description": "Objects Built-in methods \t\n - Know how to use built-in methods\t\n - Know static Object methods\nObject as Hash\t\n - Be able to use Object as a Hash\n - Be able to loop though Object keys\nArrays Built-in methods\n - Know how to copy array\n - Know how to copy array part\n - Know how to modify array\nArrays Iterating, Sorting, Filtering\n - Know how to sort Array\n - Be able to custom  sorting for Array\n - Be able to filter Array elements\n - Know several method how to iterate Array elements\n - Be able to compare Hash and Array performance\nFunctional Scope\n - Know global scope and functional scope\n - Know variables visibility areas\tUnderstand nested scopes and able work with them\nFunctions Parameters / Arguments\n - Know how to define Function parameters\n - Know difference between parameters passing by value and by reference\n - Know how to handle dynamic amount of Function parameters\nECMAScript Intermediate\n - Function default parameters\n - Discover default parameters concept and limitations\n - Spread operator for Function\n - Know how to use spread operator for Function arguments\n - Be able to compare [arguments] and spread operator\n - Spread operator for Array\n - Understand and able to use spread operator for Array concatenation\tDestruction\n - Be able to discover destruction concept\n - Understand variables and Function arguments destruction\n - String templates\n - Know String template syntax and rules\n - [for..of] loop\n - Know how [for..of] loop works\n - Be able to compare [for..of] loop with other types of loops\nAdvanced Expressions\t\n - Hoisting\n - Understand hoisting concept\n - Able to use hoisting in development\n - Auto data type conversion\n - Know rules of auto data types conversion\n - Be able to discover cases of implicit data types conversion into boolean, string, number\n - Strict comparison\n - Be able to discover difference between strict and non-strict comparison\n - Be able to provide use cases of both types of comparison\nAdvanced Functions\n - Arguments\n - Understand [arguments] and dynamic amount of parameters\n - Be able to use [arguments], retrieve additional parameters\n - [this] scope\n - Understand difference between function and method\n - Understand how [this] works, realize [this] possible issues\n - Manage [this] scope\n - Be able to replace [this] scope\n - Be able to use [call] and [apply]\n - Function build-in methods\nFunctional Patterns\t\t\n - Immediate function\n - Know immediate function pattern\n - Be able to explain the purposes of immediate function usage\n - Callback (Function as argument)\n - Know callback pattern\n - Understand callback limitations (callback hell)\n - Binding\n - Know how to bind [this] scope to function\n - Be able to provide cases when it's required\nClosures Advanced\t\n - Context (lexical environment)\n - Understand function creation context (lexical environment)\n - Be able to explain difference between scope and context\n - Inner/outer lexical environment\n - Understand lexical environment traversing mechanism\n - Understand connection between function and lexical environment\n - Be able to discover cases where lexical environment required\n - Be able to create and use closures\nObject Oriented Programming\t\n - [new] keyword\n - Understand how [new] keyword works\n - Understand the difference in calling function with/without [new] keyword\n - Function constructor\n - Know function constructor concept\n - Know function constructor pattern\n - Able to create constructor functions\n - Public, private, static members\n - Know how to create public members\n - Know how to create private members\n - Know how to create static members\n - Understand OOP emulation patterns and conventions\nPrototypal Inheritance Basics\t\t\n - [__proto__] property\n - Understand [__proto__] object property\n - Understand how interpreter traverses object properties\n - Able to work with object [__proto__]\n - Able to use [Object.create] and define [__proto__] explicitly\n - Able to set / get object prototype\n - [prototype] property\n - Know function [prototype] property\n - Understand dependency between function constructor [prototype] and instance [__proto__]\n - Able to create 'class' methods using function [prototype] property\nECMAScript Classes\t\t\n - Class declaration\n - Know [class] declaration syntax\n - Know how [class] declaration works under the hood\n - Understand difference between [class] and function constructor\n - Understand difference between method and [class] method\n - Be able to develop in OOP style using [class] declaration\n - [constructor] keyword\t\n - Inheritance\n - Know [extends] syntax and how it works\n - Getter/setter\n - Be able to create getter/setter \n - [class] methods\nFunctional Inheritance\t\t\n - Rent a constructor\tKnow functional inheritance pattern\n - Be able to explain difference between functional and prototypal inheritance\n - Be able to discover benefits and drawback of both prototypal and functional inheritance\n - Mix-ins\tKnow mix-in pattern\n - Know mix-in specific and limitations\n - Able to explain benefits and drawbacks comparing with inheritance\nRegular Expressions Basics\t\t\n - String methods\n - Know String methods for regular expressions\n - Understand regular expressions performance issues\n - RegExp methods and flags\n - Metacharacters\n - Quantifiers\nECMAScript Data Types & Expressions\t\t\n - Object [keys/values]\n - Object calculated props\n - [Symbol] data type\n - Know [Symbol] data type specific\n - Be able to explain difference between usual object key and symbol\n - [Set/Map] data types\n - [WeakSet/WeakMap] data types\nJavaScript Errors\t\t\n - [try..catch] statement\n - Know how to handle errors\n - Be able to explain [try..catch] performance issues\n - Throw errors\n - Custom errors\nECMAScript Advanced\t\t\n - Promises\n - Know how [Promise] works\n - Know promise chain pattern\n - Be able to compare promise and callback patterns\n - Be able to handle errors in promises\n - Be able to use promisification pattern\n - Iterators\n - Know [Iterator] interface\n - Be able to create custom iterator\n - Generators\tKnow generator syntax\n - Be able to compare generator and iterator\n - Understand how [yield] works\n - Understand plain async code",
      "type": "Core"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Objects Built-in methods \t\n - Know how to use built-in methods\t\n - Know static Object methods\nObject as Hash\t\n - Be able to use Object as a Hash\n - Be able to loop though Object keys\nArrays Built-in methods\n - Know how to copy array\n - Know how to copy array part\n - Know how to modify array\nArrays Iterating, Sorting, Filtering\n - Know how to sort Array\n - Be able to custom  sorting for Array\n - Be able to filter Array elements\n - Know several method how to iterate Array elements\n - Be able to compare Hash and Array performance\nFunctional Scope\n - Know global scope and functional scope\n - Know variables visibility areas\tUnderstand nested scopes and able work with them\nFunctions Parameters / Arguments\n - Know how to define Function parameters\n - Know difference between parameters passing by value and by reference\n - Know how to handle dynamic amount of Function parameters\nECMAScript Intermediate\n - Function default parameters\n - Discover default parameters concept and limitations\n - Spread operator for Function\n - Know how to use spread operator for Function arguments\n - Be able to compare [arguments] and spread operator\n - Spread operator for Array\n - Understand and able to use spread operator for Array concatenation\tDestruction\n - Be able to discover destruction concept\n - Understand variables and Function arguments destruction\n - String templates\n - Know String template syntax and rules\n - [for..of] loop\n - Know how [for..of] loop works\n - Be able to compare [for..of] loop with other types of loops\nAdvanced Expressions\t\n - Hoisting\n - Understand hoisting concept\n - Able to use hoisting in development\n - Auto data type conversion\n - Know rules of auto data types conversion\n - Be able to discover cases of implicit data types conversion into boolean, string, number\n - Strict comparison\n - Be able to discover difference between strict and non-strict comparison\n - Be able to provide use cases of both types of comparison\nAdvanced Functions\n - Arguments\n - Understand [arguments] and dynamic amount of parameters\n - Be able to use [arguments], retrieve additional parameters\n - [this] scope\n - Understand difference between function and method\n - Understand how [this] works, realize [this] possible issues\n - Manage [this] scope\n - Be able to replace [this] scope\n - Be able to use [call] and [apply]\n - Function build-in methods\nFunctional Patterns\t\t\n - Immediate function\n - Know immediate function pattern\n - Be able to explain the purposes of immediate function usage\n - Callback (Function as argument)\n - Know callback pattern\n - Understand callback limitations (callback hell)\n - Binding\n - Know how to bind [this] scope to function\n - Be able to provide cases when it's required\nClosures Advanced\t\n - Context (lexical environment)\n - Understand function creation context (lexical environment)\n - Be able to explain difference between scope and context\n - Inner/outer lexical environment\n - Understand lexical environment traversing mechanism\n - Understand connection between function and lexical environment\n - Be able to discover cases where lexical environment required\n - Be able to create and use closures\nObject Oriented Programming\t\n - [new] keyword\n - Understand how [new] keyword works\n - Understand the difference in calling function with/without [new] keyword\n - Function constructor\n - Know function constructor concept\n - Know function constructor pattern\n - Able to create constructor functions\n - Public, private, static members\n - Know how to create public members\n - Know how to create private members\n - Know how to create static members\n - Understand OOP emulation patterns and conventions\nPrototypal Inheritance Basics\t\t\n - [__proto__] property\n - Understand [__proto__] object property\n - Understand how interpreter traverses object properties\n - Able to work with object [__proto__]\n - Able to use [Object.create] and define [__proto__] explicitly\n - Able to set / get object prototype\n - [prototype] property\n - Know function [prototype] property\n - Understand dependency between function constructor [prototype] and instance [__proto__]\n - Able to create 'class' methods using function [prototype] property\nECMAScript Classes\t\t\n - Class declaration\n - Know [class] declaration syntax\n - Know how [class] declaration works under the hood\n - Understand difference between [class] and function constructor\n - Understand difference between method and [class] method\n - Be able to develop in OOP style using [class] declaration\n - [constructor] keyword\t\n - Inheritance\n - Know [extends] syntax and how it works\n - Getter/setter\n - Be able to create getter/setter \n - [class] methods\nFunctional Inheritance\t\t\n - Rent a constructor\tKnow functional inheritance pattern\n - Be able to explain difference between functional and prototypal inheritance\n - Be able to discover benefits and drawback of both prototypal and functional inheritance\n - Mix-ins\tKnow mix-in pattern\n - Know mix-in specific and limitations\n - Able to explain benefits and drawbacks comparing with inheritance\nRegular Expressions Basics\t\t\n - String methods\n - Know String methods for regular expressions\n - Understand regular expressions performance issues\n - RegExp methods and flags\n - Metacharacters\n - Quantifiers\nECMAScript Data Types & Expressions\t\t\n - Object [keys/values]\n - Object calculated props\n - [Symbol] data type\n - Know [Symbol] data type specific\n - Be able to explain difference between usual object key and symbol\n - [Set/Map] data types\n - [WeakSet/WeakMap] data types\nJavaScript Errors\t\t\n - [try..catch] statement\n - Know how to handle errors\n - Be able to explain [try..catch] performance issues\n - Throw errors\n - Custom errors\nECMAScript Advanced\t\t\n - Promises\n - Know how [Promise] works\n - Know promise chain pattern\n - Be able to compare promise and callback patterns\n - Be able to handle errors in promises\n - Be able to use promisification pattern\n - Iterators\n - Know [Iterator] interface\n - Be able to create custom iterator\n - Generators\tKnow generator syntax\n - Be able to compare generator and iterator\n - Understand how [yield] works\n - Understand plain async code",
      "type": "Core"
    },
    "A3": {
      "level": "Advanced",
      "description": "Object Property Descriptor                \n - Know how to use property descriptors  \n - Be able to explain enumerable, configurable, writable property attributes   \n - Be able to create property getter/setter\nFunctions Recursion                \n - Know recursion concept and able to use it        \n - Able to explain recursion risks, benefits and drawbacks\nAdvanced Functional Patterns                \n - Chaining        \n - Know chaining pattern and cases where it will be useful        \n - Currying        \n - Know how to bind arguments to function       \n - Memorization       \n - Know memorization optimization        \n - Understand problem with non-primitive arguments memorization\nPrototypal Inheritance Advanced                \n - Temporary constructor        \n - Know prototypal inheritance mechanism        \n - Know prototypal inheritance temporary constructor pattern       \n - Be able to explain prototypal chain from instance to its 'class' and 'class' parent        \n - Be able to develop in OOP style using prototypal inheritance pattern        \n - [instanceof] operator      \n - Be able to use [instanceof] operator     \n - Know how [instanceof] operator works\nECMAScript Classes Advanced               \n - [super] keyword        \n - Understand [super] reference        \n - Able to use [super] reference (in constructor, in class methods)\n - [static] keyword\n - Know static members concept\n - Be able to create [class] static properties and methods\nRegular Expressions Advanced                \n - Ranges        \n - Grouping        \n - Greedy and lazy search        \n - Replacements",
      "type": "Core"
    }
  },
  {
    "id": "typescript",
    "group": "JavaScript Development",
    "name": "TypeScript",
    "description": "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.\nWikipedia",
    "A1": {
      "level": "Novice",
      "description": "- Primitive Types (string, number, boolean, null, void vs undefined, enum)\n - Arrays, Tuples, Objects, Records (Object, Arrays, tuples, records basics\n - Functions (function typing, function generic, optional/default/rest parameters, return type)\n - Interfaces, Types, Generics (interface vs type)\n - Classes (property access modificators, readonly, implements vs extends, get/set, super, Parameter Properties)\n - Type manipulation (Union vs Intersection, Partial, keyof, typeof)\n - Advanced utility types (Exclude, Omit, Pick, Extract)\n - Decorators (kinds of decorators, signatures)\n - Type Narrowing (build in type guards, as casting)\n - TS Config (essential properties for basic project setup,\n - list basic configuration options, what they for)\n - Namespace and Modules (.d.ts files, namespace vs module)",
      "type": "Core"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- Primitive Types (const/numeric/string enums enum pitfalls, any vs unknown, type literal, symbol, bigInt)\n - Arrays, Tuples, Objects, Records (Record vs Object, multi-type array)\n - Functions (function overload, this type, void/never in functions, Function vs () => any type)\n - Interfaces, Types, Generics (index signature, interface vs type, generic constraints, generic const annotation)\n - Classes (override keyword, abstract, static, arrow function methods, generic class)\n - Type manipulation (Discriminating Unions, type inheritance/composition, mapped type, template literal type)\n - Advanced utility types (Capitalize, Uppercase, ReturnType, Parameters, Constructor parameters, extract array element type)\n - Decorators (decorator composition, execution/evaluation order, passing metadata to decorator)\n - Type Narrowing (custom type predicates, never in type narrowing, satisfies keyword)\n - TS Config (path aliases, extends, lib, noImplicitAny, strict, strictNullChecks, noImplicitOverride,noImplicitReturns,noImplicitThis,strcitPropertyInitialization, useUnknownInCatch, downLevelIteration)\n - Namespace and Modules (triple-slash directive)\n - TS compiler optimization, module resolution (isolatedModules, incremental build, limit type inference)",
      "type": "Core"
    },
    "A3": {
      "level": "Advanced",
      "description": "- Primitive Types (nominal vs structural typing, never type)\n - Arrays, Tuples, Objects, Records (as const, named tuples)\n - Functions (call signature, construct signature, bind vs inline arrow function, strictBindCallApply\n - Classes (static block, auto accessor)\n - Type manipulation (Readonly, ReadonlyArray vs as const, conditional types, infer)\n - Advanced utility types (ThisType, ThisParameterType, OmitThisParameter, InstanceType)\n - Decorators (how decorator actually works under the hood, compiled decorators, limitation and pitfals when using decorators, ts decorators vs esNext decorators)\n - Type Narrowing (assert functions, as casting vs satisfies)\n -  TS Config (module, moduleResolution, multiple ts configs, virtual directories (rootDirs), isolatedModules, )\n - Namespace and Modules (Definitely Typed, declaration merging, Extending/overriding global or third party typing)\n - TS compiler optimization, module resolution (module resolution, debugging build)",
      "type": "Core"
    }
  },
  {
    "id": "javascript-in-browser",
    "group": "JavaScript Development",
    "name": "JavaScript in Browser",
    "description": "Nowadays almost all web pages contain JavaScript, a scripting programming language that runs on visitor's web browser. It makes web pages functional for specific purposes and if disabled for some reason, the content or the functionality of the web page can be limited or unavailable.",
    "A1": {
      "level": "Intermediate",
      "description": "- ability to manipulate the DOM to update page content, attributes, and structure\n - ability to register and handle user events such as clicks, input, and form submission\n - ability to use browser developer tools to inspect elements, view console output, and trace basic issues\n - knowledge of asynchronous browser operations such as timers, promises, and fetch requests",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- ability to manipulate the DOM to update page content, attributes, and structure\n - ability to register and handle user events such as clicks, input, and form submission\n - ability to use browser developer tools to inspect elements, view console output, and trace basic issues\n - knowledge of asynchronous browser operations such as timers, promises, and fetch requests",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "- ability to organize browser-side code into maintainable modules and reusable functions\n - ability to manage client-side state using browser storage and application data structures\n - ability to optimize rendering and interaction performance in complex web pages\n - ability to apply browser APIs such as local storage, history, clipboard, and geolocation where appropriate",
      "type": "Required"
    }
  },
  {
    "id": "browser-apis",
    "group": "JavaScript Development",
    "name": "Browser APIs",
    "description": "Browser APIs are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it. In particular, the most common categories of browser APIs you'll use:\n - APIs for manipulating documents loaded into the browser\n - APIs that fetch data from the server\n - APIs for drawing and manipulating graphics\n - Device APIs\n - Client-side storage APIs",
    "A1": {
      "level": "Intermediate",
      "description": "- ability to manipulate page content and respond to user input using DOM APIs and event listeners\n - ability to request and process server data using Fetch and promise-based workflows\n - ability to store and retrieve client-side state using cookies, localStorage, or sessionStorage based on the use case\n - ability to use basic graphics or media APIs to render simple interactive output on a page",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- ability to manipulate page content and respond to user input using DOM APIs and event listeners\n - ability to request and process server data using Fetch and promise-based workflows\n - ability to store and retrieve client-side state using cookies, localStorage, or sessionStorage based on the use case\n - ability to use basic graphics or media APIs to render simple interactive output on a page",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "- ability to build integrated client-side features that combine DOM, networking, storage, and media APIs\n - ability to apply feature detection and compatibility fallbacks across major browser engines\n - ability to implement responsive, event-driven interactions while managing performance and memory usage\n - ability to use device and environment APIs with appropriate permission handling and error recovery",
      "type": "Required"
    }
  },
  {
    "id": "javascript-development-tools",
    "group": "JavaScript Development",
    "name": "JavaScript Development Tools",
    "description": "Is a set of tools for productive JavaScript development process.",
    "A1": {
      "level": "Intermediate",
      "description": "- ability to install and use JavaScript development tools for day to day coding tasks\n - ability to configure project level settings for linting, formatting, and source file organization\n - ability to use built in debugging features such as breakpoints, variable inspection, and stack tracing\n - ability to integrate package management and script execution into a local development workflow",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- ability to install and use JavaScript development tools for day to day coding tasks\n - ability to configure project level settings for linting, formatting, and source file organization\n - ability to use built in debugging features such as breakpoints, variable inspection, and stack tracing\n - ability to integrate package management and script execution into a local development workflow",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "- ability to design and maintain a consistent JavaScript toolchain across multiple projects\n - ability to configure build, transpilation, and bundling tools for environment specific outputs\n - knowledge of advanced debugging and troubleshooting across browser, runtime, and build tooling layers\n - ability to automate quality checks with linting, formatting, and test execution in local and shared workflows",
      "type": "Required"
    }
  },
  {
    "id": "javascript-top-frameworks",
    "group": "JavaScript Frameworks",
    "name": "JavaScript Top Frameworks",
    "description": "JavaScript Frameworks like React, Angular, Vue, etc.",
    "A1": {
      "level": "Intermediate",
      "description": "Intermediate knowledge of one of these frameworks:\n - React, Angular, Vue, React Native, etc...\nIntermediate understanding:\n - Building user interfaces with a specific JavaScript framework\n - Experience with component composition and component communication patterns\n - Understanding of state management techniques and libraries (e.g., Redux, MobX, NgRx)\n - Routing techniques\n - Knowledge of design systems or component libraries for consistent UI development\n - Ability to write unit tests",
      "type": "Core"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Intermediate knowledge of one of these frameworks:\n - React, Angular, Vue, React Native, etc...\nIntermediate understanding:\n - Building user interfaces with a specific JavaScript framework\n - Experience with component composition and component communication patterns\n - Understanding of state management techniques and libraries (e.g., Redux, MobX, NgRx)\n - Routing techniques\n - Knowledge of design systems or component libraries for consistent UI development\n - Ability to write unit tests",
      "type": "Core"
    },
    "A3": {
      "level": "Advanced",
      "description": "Advanced level of at least one:\n - React, Angular, Vue, React Native, etc...\nGood understanding:\n - Pros and cons of one more CMS / JS framework / CSS framework from the primary stack.\n - Different approaches on how to organize modularity, state management and code reuse on the project.\n - Knowledge of design systems and component libraries for consistent UI development\n - Component building and composition patterns, such as higher-order components, render props, and compound components\n - Ability to write unit tests, integration tests, or end-to-end tests for components and applications\n - Experience in multi-language support and internationalization (i18n) best practices and tools\n - Ability to implement routing strategies, such as dynamic imports and code-splitting based on routes\n - Experience with server-side rendering (SSR) and static site generation (SSG) techniques for improved performance and SEO\n - Understanding of micro-frontend architectures and techniques for building modular and scalable web applications",
      "type": "Core"
    }
  },
  {
    "id": "reactjs",
    "group": "JavaScript Frameworks",
    "name": "ReactJS",
    "description": "ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    "A1": {
      "level": "Intermediate",
      "description": "- React DOM (useRef, createRef, ref forwarding, callback refs, SyntheticEvent)\n - Forms (controlled/uncontrolled components)\n - Context (when to use, useContext, Context.Provider, Context.Consumer)\n - Performance (memo, useMemo, useCallback, keys, profiler)\n - React Redux (presentational vs container components, Provider, connect, useSelector, useDispatch)\n - Redux Async Flow (middleware, Redux Thunk)\n - Routing (react-router, jsx/object configuration, history)",
      "type": "Optional"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- React DOM (useRef, createRef, ref forwarding, callback refs, SyntheticEvent)\n - Forms (controlled/uncontrolled components)\n - Context (when to use, useContext, Context.Provider, Context.Consumer)\n - Performance (memo, useMemo, useCallback, keys, profiler)\n - React Redux (presentational vs container components, Provider, connect, useSelector, useDispatch)\n - Redux Async Flow (middleware, Redux Thunk)\n - Routing (react-router, jsx/object configuration, history)",
      "type": "Optional"
    },
    "A3": {
      "level": "Advanced",
      "description": "- React code reuse patterns (custom hooks, higher-order components, render props)\n - Virtual DOM (concept, reconciliation algorithm, recursing on children, keys, Fiber Architecture)\n - Security (XSS on React Props, dangerouslySetInnerHTML)\n - Automated testing (types of rendering, React Testing Library or Enzyme, e2e testing libraries - playwright, cypress, puppeteer, etc.)\n - Building (transpilers, bundlers, dev vs production build, code splitting, build optimization)\n - Server rendering (difference with CSR, cases of usage, Next.js)\n - Static site rendering (Next.js, Gatsby)",
      "type": "Optional"
    }
  },
  {
    "id": "angular",
    "group": "JavaScript Frameworks",
    "name": "Angular",
    "description": "Angular (commonly referred to as \"Angular 2+\" or \"Angular v2 and above\") is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.\nWikipedia",
    "A1": {
      "level": "Intermediate",
      "description": "- Component & NgModule structure (how style encapsulation works, optional selector, bootstrap, schemas, :host-context, ::ng-deep)\n - Component Interaction & Nesting (aliases, Service, getter, setter, onChanges, two-way data binding for user component, ng-content, QueryList)\n - Component Lifecycle Hooks (constructor vs OnInit, AfterViewInit, AfterContentInit, hooks order)\n - Directives (ng-container, ng-template, trackBy, elementRef, exportAs, custom directive, @HostBinding, @HostListener)\n - Pipes (pure/impure, custom pipe, using pipe in typescript)\n - RxJS basics (hot vs cold, high-order operators, combine operators, subscription management operators)\n - Dependency Injection (providers configuration in-depth, provideIn, injectors tree. How to inject not a class instance, @Inject, inject())\n - Change detection (algorithm, ngZone, cd.detectChanges and markForCheck)\n - Forms (forms with arrays/nested objects, Validations, cross validation, AsyncValidation, boolean properties, FormBuilder)\n - Http (observe, responseType, how to make Types queries, make minimal auth interceptor. Why request is cloned?)\n - Routing (data, resolve, guards, pathMatch, lazyLoading, ActivatedRoute - read and write data snapshot)\n - Unit testing (test class vs test component, how to check template updates. Async tests.)\n - Dynamic Components\n - Ngrx (redux, subscribing to store, dispatching actions, effects, schematics)",
      "type": "Optional"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- Component & NgModule structure (how style encapsulation works, optional selector, bootstrap, schemas, :host-context, ::ng-deep)\n - Component Interaction & Nesting (aliases, Service, getter, setter, onChanges, two-way data binding for user component, ng-content, QueryList)\n - Component Lifecycle Hooks (constructor vs OnInit, AfterViewInit, AfterContentInit, hooks order)\n - Directives (ng-container, ng-template, trackBy, elementRef, exportAs, custom directive, @HostBinding, @HostListener)\n - Pipes (pure/impure, custom pipe, using pipe in typescript)\n - RxJS basics (hot vs cold, high-order operators, combine operators, subscription management operators)\n - Dependency Injection (providers configuration in-depth, provideIn, injectors tree. How to inject not a class instance, @Inject, inject())\n - Change detection (algorithm, ngZone, cd.detectChanges and markForCheck)\n - Forms (forms with arrays/nested objects, Validations, cross validation, AsyncValidation, boolean properties, FormBuilder)\n - Http (observe, responseType, how to make Types queries, make minimal auth interceptor. Why request is cloned?)\n - Routing (data, resolve, guards, pathMatch, lazyLoading, ActivatedRoute - read and write data snapshot)\n - Unit testing (test class vs test component, how to check template updates. Async tests.)\n - Dynamic Components\n - Ngrx (redux, subscribing to store, dispatching actions, effects, schematics)",
      "type": "Optional"
    },
    "A3": {
      "level": "Advanced",
      "description": "- Component & NgModule structure (standalone components, how to bootstrap app without NgModule, css selector for component, APP_INITIALIZE)\n - Component Interaction & Nesting (tplVars, View/ContentChild[ren], multi-content projection, async EventEmitter, @Input object metadata, Signals)\n - Component Lifecycle Hooks (AfterContent/ViewChecked, DoCheck, afterRender, afterNextRender, DestroyRef)\n - Directives (* syntax sugar, embeddedViews, *ngTemplateOutlet[Context], why renderer?, built-in control flow)\n - Pipes (async pipe under the hood)\n - RxJS (schedulers, multicasting, share, expand, custom operator, takeUntilDestroyed)\n - Dependency Injection (lazy loaders injector, viewProviders, injection modifiers: @Skip/@SkipSelf/@Optional, multi: true, forwardRef)\n - Change detection (ngDoCheck, tick(), runOutsideAngular, expressionChangedError,  why |async works inside of OnPush components, zone-less change detection)\n - Forms (custom validation, CustomValueAccessor, typed Forms)\n - Http (how to handle token expired. Order of interceptors execution, http context)\n - Routing (RouteReuseStrategy, PreloadingStrategy, route events, multi-outlet, how to breadcrumbs, bindToComponentInputs, functional vs class guards)\n - Unit testing (HttpTestingModule. ComponentHarness)\n - Animations (trigger, transition, query, animate, keyframes, style, stagger, parametrized animation)\n - Server side rendering (angular universal)\n - Service/Web Workers.",
      "type": "Optional"
    }
  },
  {
    "id": "vuejs",
    "group": "JavaScript Frameworks",
    "name": "VueJS",
    "description": "VueJS is an open-source front-end progressive JavaScript framework used to develop interactive web interfaces. It is one of the known frameworks used to simplify web development. VueJS focusses on the view layer. It can be simply integrated into massive projects for front-end development without any problems.",
    "A1": {
      "level": "Intermediate",
      "description": "- Vuex/Pinia (state, mutations, getters, modules, mappers)\n - Vue router (navigation guards, history)\n - Slots (fallback content, named and scoped slots, $slots, $scopedSlots)\n - Mixins and Composables (pros/cons, merge strategies)\n - Fallthrough attributes (inheritance)\n - Lifecycle hooks (beforeUpdate, updated, activated, deactivated, errorCaptured)\n - Watchers (immediate, deep)",
      "type": "Optional"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- Vuex/Pinia (state, mutations, getters, modules, mappers)\n - Vue router (navigation guards, history)\n - Slots (fallback content, named and scoped slots, $slots, $scopedSlots)\n - Mixins and Composables (pros/cons, merge strategies)\n - Fallthrough attributes (inheritance)\n - Lifecycle hooks (beforeUpdate, updated, activated, deactivated, errorCaptured)\n - Watchers (immediate, deep)",
      "type": "Optional"
    },
    "A3": {
      "level": "Advanced",
      "description": "- Rendering Mechanism (virtual DOM, templates vs. render functions) \n - Render functions (createElement, data object)\n - Reactivity in Depth\n - Performance and Optimizations (v-show, SSR, keep alive, dynamic & async components, functional components, memory leak)\n - Server Side Rendering (vue-server-renderer, Nuxt.js + Static Site Generation)\n - Testing (Jest, Vue Test Utils)\n - Build, dev tools",
      "type": "Optional"
    }
  },
  {
    "id": "web-application-rendering-strategies",
    "group": "Web Development",
    "name": "Web Application Rendering Strategies",
    "description": "The \"Web Application Rendering Strategies\" skill encompasses the knowledge and expertise required to design and implement effective rendering approaches for web applications, ensuring optimal performance, user experience, and search engine optimization (SEO). It involves mastering techniques such as Server-Side Rendering (SSR), Static Site Generation (SSG), Client-Side Rendering (CSR), Incremental Static Generation (ISG), and Partial Partial Rendering (PPR), as well as advanced strategies like hybrid rendering, streaming server rendering, and emerging techniques like Distributed Rendering and Edge Rendering. Proficiency in this skill also requires an in-depth understanding of caching strategies, CDN configurations, and performance optimization techniques tailored to different rendering approaches and application scenarios.",
    "A1": {
      "level": "Novice",
      "description": "- Understand the fundamental concepts of web application rendering strategies.\n - Familiarity with the basic principles of SSR (Server-Side Rendering), SSG (Static Site Generation), CSR (Client-Side Rendering), and hybrid rendering approaches.\n - Knowledge of the advantages and disadvantages of each rendering strategy.\n - Awareness about at least 1 basic web server (e.g., Apache, Nginx, IIS, Express, ...) for hosting web applications.\n - Understanding of the client-server architecture and how it relates to web application rendering.\n - Basic knowledge of caching mechanisms and their importance for web performance.",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "- Understand the fundamental concepts of web application rendering strategies.\n - Familiarity with the basic principles of SSR (Server-Side Rendering), SSG (Static Site Generation), CSR (Client-Side Rendering), and hybrid rendering approaches.\n - Knowledge of the advantages and disadvantages of each rendering strategy.\n - Awareness about at least 1 basic web server (e.g., Apache, Nginx, IIS, Express, ...) for hosting web applications.\n - Understanding of the client-server architecture and how it relates to web application rendering.\n - Basic knowledge of caching mechanisms and their importance for web performance.",
      "type": "Core"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Ability to implement CSR using modern JavaScript frameworks or libraries (e.g., React, Angular, Vue.js).\n - Proficiency in implementing SSR using server-side frameworks or libraries (e.g., Next.js, Nuxt.js, Angular Universal, Node.js with Express, ASP.NET, Ruby on Rails).\n - Experience with SSG tools and frameworks (e.g., Next.js, Gatsby, Jekyll, Hugo).\n - Awareness of Incremental Static Generation (ISG) and its use cases.\n - Understanding of the Single Page Application (SPA) architecture and its implications.\n - Ability to optimize web applications for performance, including techniques like code splitting, lazy loading, and caching.\n - Understanding of isomorphic/universal rendering and its benefits.\n - Awareness about server-side caching strategies and storages (e.g., Redis, Memcached) for improving performance.\n - Familiarity with build tools and bundlers (e.g., Webpack, Rollup, Parcel) for optimizing web applications.\n - Familiarity with rendering patterns like Render-as-You-Fetch, Streaming Server-Side Rendering.\n - Understanding of Content Delivery Networks (CDNs) role.",
      "type": "Core"
    }
  },
  {
    "id": "css-preprocessors",
    "group": "Web Development",
    "name": "CSS Preprocessors",
    "description": "A CSS framework is a library allowing for easier, more standards-compliant web design using the Cascading Style Sheets language. Most of these frameworks   contain at least a grid. More functional frameworks also come with more   features and additional JavaScript based functions, but are mostly design   oriented and focused around interactive UI patterns.",
    "A1": {
      "level": "Novice",
      "description": "- Ability to explain the purpose of CSS preprocessors and how they differ from plain CSS.\n - Knowledge of common preprocessor concepts such as variables, nesting, mixins, and partials.\n - Ability to read and interpret simple preprocessor syntax in existing stylesheets.\n - Ability to compile or build a preprocessor source file into standard CSS with guidance.",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- Ability to write maintainable styles using variables, nesting, and reusable mixins in day to day work.\n - Ability to organize stylesheet modules into partials and imports for a small or medium codebase.\n - Knowledge of basic preprocessor control structures such as conditionals and loops.\n - Ability to troubleshoot common compilation issues and resolve syntax errors with documentation support.",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "- Ability to design a scalable stylesheet architecture using preprocessors across multiple components or pages.\n - Ability to create reusable mixins, functions, and utility patterns that reduce duplication.\n - Knowledge of performance and maintainability tradeoffs when structuring large preprocessor codebases.\n - Ability to integrate preprocessor workflows with build tools, linting, and automated asset pipelines.",
      "type": "Required"
    }
  },
  {
    "id": "css-methodologies",
    "group": "Web Development",
    "name": "CSS Methodologies",
    "description": "CSS methodologies are formal, documented systems for authoring CSS in a way that allows us to develop, maintain, and scale the front-end as a set of small, isolated modules. Rather than as one massive lump of indivisible code.",
    "A1": {
      "level": "Novice",
      "description": "- Intermediate knowledge of at least one methodology: BEM, OOCSS, SMACSS, ITCSS, Atomic CSS",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- Advanced knowledge of at least one methodology: BEM, OOCSS, SMACSS, ITCSS, Atomic CSS\n - Able to compare methodologies mentioned above\n - Understanding of CSS-in-JS, CSS Modules",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "- Advanced knowledge of several methodologies: BEM, OOCSS, SMACSS, ITCSS, Atomic CSS\n - Able to compare methodologies mentioned above\n - Intermediate understanding of CSS-in-JS, CSS Modules",
      "type": "Required"
    }
  },
  {
    "id": "css-frameworks",
    "group": "Web Development",
    "name": "CSS Frameworks",
    "description": "A CSS framework is a library allowing for easier, more standards-compliant web design using the Cascading Style Sheets language. Most of these frameworks contain at least a grid. More functional frameworks 0also come with more features and additional JavaScript based functions, but are mostly design oriented and focused around interactive UI patterns.",
    "A1": {
      "level": "Novice",
      "description": "- knowledge of the basic purpose of CSS frameworks and the problems they solve in front end development\n - ability to identify common framework concepts such as grid systems, utility classes, and prebuilt UI components\n - knowledge of how to include a framework in a project using the standard distribution method supported by the framework\n - ability to apply framework classes to simple layout and typography tasks with documentation support\n - knowledge of the framework naming patterns and structure used to locate styles and components",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- ability to build common page sections using framework grids, spacing, and responsive breakpoint utilities\n - ability to customize component behavior through documented configuration options and standard utility classes\n - knowledge of how framework conventions affect HTML structure, class composition, and responsive design choices\n - ability to troubleshoot routine styling conflicts between framework styles and project-specific CSS\n - ability to select appropriate built-in components for forms, navigation, alerts, and cards based on documented usage",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "- ability to adapt framework patterns to complex responsive layouts across multiple viewports and content types\n - ability to extend framework styling with maintainable overrides while preserving consistency with framework conventions\n - knowledge of framework architecture, theming mechanisms, and asset loading strategies relevant to production use\n - ability to evaluate tradeoffs between utility-first approaches, component-based usage, and custom CSS additions\n - ability to optimize framework usage for maintainability, performance, and accessibility within a project codebase",
      "type": "Required"
    }
  },
  {
    "id": "cross-browser-compatible-html-css-markup",
    "group": "Web Development",
    "name": "Cross-browser compatible HTML/CSS markup",
    "description": "Cross-browser compatible HTML/CSS markup is a subset of HTML/CSS markup that is designed and tested to work consistently across multiple web browsers and environments. It ensures that web pages render correctly and maintain functionality regardless of the browser used by the end-user. Some key aspects of cross-browser compatible markup include:  \n - Standard Compliance: Using standards-based HTML and CSS ensures that browsers adhering to these standards interpret the code similarly.\n - Fallbacks and Polyfills: Implementing fallback styles or scripts for unsupported features in older browsers helps maintain functionality.\n - Vendor Prefixes: Utilizing vendor-specific prefixes (e.g., -webkit-, -moz-) when necessary to support cutting-edge CSS features while maintaining backward compatibility.\n - Consistent Testing: Regular testing across multiple browsers, including mobile, desktop, and different operating systems, helps identify and address compatibility issues.\n - Responsive Design: Ensuring that markup is flexible and adaptive works not just across browsers, but also on various screen sizes and devices.\nBy focusing on these practices, developers can create web pages that deliver a unified and seamless user experience regardless of the user's browser choice.",
    "A1": {
      "level": "Novice",
      "description": "- ability to identify the purpose of cross-browser compatible HTML and CSS markup\n - knowledge of core HTML and CSS standards that influence consistent rendering\n - ability to recognize common browser differences in layout, spacing, and styling\n - knowledge of basic responsive design concepts as they relate to browser compatibility\n - ability to describe the role of validation and multi-browser testing in markup quality",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- ability to author standards-based semantic HTML with routine cross-browser compatibility in mind\n - ability to apply basic CSS fallbacks for unsupported or inconsistently supported features\n - ability to use vendor prefixes when required by a defined browser support target\n - ability to test pages in major desktop and mobile browsers and record compatibility issues\n - ability to adjust markup and styles to support common screen sizes and device contexts",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "- ability to design markup that remains stable across major browser engines and versions\n - ability to diagnose and resolve cross-browser rendering defects with minimal guidance\n - ability to select appropriate fallback, progressive enhancement, and feature detection patterns\n - ability to maintain consistent responsive behavior across desktop, tablet, and mobile environments\n - ability to evaluate browser support impact when introducing newer HTML or CSS capabilities",
      "type": "Required"
    }
  },
  {
    "id": "web-communication-protocols",
    "group": "Web Development",
    "name": "Web Communication Protocols",
    "description": "Web communication protocols are technologies used to transfer information across the internet. For example, a web browser uses these protocols to request information from a web server, which is then displayed on the browser screen in the form of text and images.",
    "A1": {
      "level": "Novice",
      "description": "- knowledge of core web communication concepts, including client, server, request, and response relationships\n - ability to identify common web protocols such as HTTP and HTTPS and describe their basic purpose\n - knowledge of basic URL structure, including scheme, host, path, and query parameters\n - ability to recognize common HTTP methods and status codes at a high level\n - knowledge of the role of browsers, web servers, and APIs in web communication",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- ability to construct and inspect basic HTTP requests and responses using standard headers and payloads\n - knowledge of how cookies, sessions, and authentication tokens support stateful web interactions\n - ability to explain the difference between synchronous request-response flows and asynchronous browser communication\n - knowledge of common transport and security concepts such as TLS, certificate validation, and encrypted traffic\n - ability to use documentation and basic tooling to troubleshoot simple communication issues",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- ability to construct and inspect basic HTTP requests and responses using standard headers and payloads\n - knowledge of how cookies, sessions, and authentication tokens support stateful web interactions\n - ability to explain the difference between synchronous request-response flows and asynchronous browser communication\n - knowledge of common transport and security concepts such as TLS, certificate validation, and encrypted traffic\n - ability to use documentation and basic tooling to troubleshoot simple communication issues",
      "type": "Required"
    }
  },
  {
    "id": "web-performance-analysis-and-optimization",
    "group": "Web Development",
    "name": "Web Performance Analysis and Optimization",
    "description": "Analysis and optimization of web applications performance.\nWeb performance refers to the speed in which web pages are downloaded and displayed on the user's web browser. Some aspects which can affect the speed of page load include browser/server cache, image optimization, and encryption (for example SSL), which can affect the time it takes for pages to render.",
    "A1": {
      "level": "Novice",
      "description": "- Project Framework Optimization Techniques\n - Page load optimization techniques\n - Awareness of Network Performance: Has a basic understanding of how network conditions affect web performance.\n - Optimization Techniques: Familiar with simple optimization techniques such as minification of CSS, JS, and image optimization.\n - Repaint/Reflow Understanding",
      "type": "Optional"
    },
    "A2": {
      "level": "Novice",
      "description": "- Project Framework Optimization Techniques\n - Page load optimization techniques\n - Awareness of Network Performance: Has a basic understanding of how network conditions affect web performance.\n - Optimization Techniques: Familiar with simple optimization techniques such as minification of CSS, JS, and image optimization.\n - Repaint/Reflow Understanding",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- JavaScript Profiling and Debugging\n - Basic Performance Testing: Can run performance tests using browser dev tools (e.g., Chrome DevTools) and interpret the results.\n - Network Optimizations\n - Basic understanding how caching works in Browser and on Server\n - JavaScript Performance Optimization Techniques\n - JavaScript Obfuscation and Minification\n - Framework optimization techniques (Angular, React, or others)\n - Critical Rendering Path\n - Repaint Reflow Understanding\n - Understanding how to work with digital assets like Images (viewpoints, sizing, aspect ratio, caching)\n - Understand what is and how to measure following  Core Web Vitals: FCP, LCP, CLS, INP\n - Have experience with tools like: Google Lighthouse/PageSpeed Insights",
      "type": "Required"
    }
  },
  {
    "id": "frontend-web-accessibility",
    "group": "Web Development",
    "name": "Frontend Web Accessibility",
    "description": "When websites and web tools are properly designed and coded, people with disabilities can use them.\nMaking the web accessible benefits individuals, businesses, and society. International web standards define what is needed for accessibility.",
    "A1": {
      "level": "Novice",
      "description": "Basic understanding of:\n - a11y specifications\n - Assistive Technology and Testing tools (screen readers and how to test with them)\n - Testing tools \n - Semantic tags and their roles",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "Basic understanding of:\n - a11y specifications\n - Assistive Technology and Testing tools (screen readers and how to test with them)\n - Testing tools \n - Semantic tags and their roles",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "Intermediate  understanding of: \n - a11y specifications\n - Implementing accessible HTML markup, including proper use of semantic elements, ARIA roles, and landmarks\n - Ability to conduct manual accessibility testing and audits using screen readers and other assistive technologies\n - Creating accessible forms, including proper labeling, error handling, and validation\n - Familiarity with accessible color contrast and typography guidelines\n - WAI-ARIA Authoring Practices (Roles, Regions, Aria properties)\n - Understand and know WCAG 2.* and Section 508 standards\n - Accessibility in JavaScript (Form validation and notification, Focus management, Device dependent and device independent event handlers)",
      "type": "Required"
    }
  },
  {
    "id": "content-management-systems",
    "group": "Web Development",
    "name": "Content Management Systems",
    "description": "A content management system is for creating, managing, and optimizing your customers' digital experience. More specifically, a CMS is a software application that allows users to collaborate in the creation, editing, and production of digital content: web pages, blog posts, etc.",
    "A1": {
      "level": "Novice",
      "description": "- What is CMS and its purpose.\n - Basic understanding of the backend and frontend of CMS.\n - How to create, edit and delete content within the CMS.\n - Basic knowledge of organizing and categorizing content.\n - Basic understanding of multi-language content support (localizations).\n - Understanding the importance of SEO friendly URLs and metadata.\n - Basic knowledge of CMS security and user roles.",
      "type": "Optional"
    },
    "A2": {
      "level": "Novice",
      "description": "- What is CMS and its purpose.\n - Basic understanding of the backend and frontend of CMS.\n - How to create, edit and delete content within the CMS.\n - Basic knowledge of organizing and categorizing content.\n - Basic understanding of multi-language content support (localizations).\n - Understanding the importance of SEO friendly URLs and metadata.\n - Basic knowledge of CMS security and user roles.",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Understand the basic functionality and principles of a CMS.\n - Navigate and use features of a specific CMS platform effectively.\n - Customize page layouts and templates within the CMS.\n - Create and manage content within the CMS, including images and other media.\n - Create and manage multi-language content (with localizations).\n - Understand the importance of metadata and SEO optimization in content management.\n - Troubleshoot common issues with CMS installations and configurations.\n - Basic WYSIWYG component understanding",
      "type": "Required"
    }
  },
  {
    "id": "pwa-and-amp",
    "group": "Web Development",
    "name": "PWA & AMP",
    "description": "Progressive Web Apps (PWA) are just web applications.\nProgressive Web Apps are built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device with a single codebase.",
    "A1": {
      "level": "Novice",
      "description": "Nice to have:\n - At least basic understanding of Progressive Web Applications",
      "type": "Optional"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Intermediate understanding of:\n - Progressive Web Application\n - Accelerated Mobile Pages\n - Web manifest",
      "type": "Optional"
    },
    "A3": {
      "level": "Advanced",
      "description": "Advanced understanding of:\n - Progressive Web Application\n - Accelerated Mobile Pages\n - Web manifest",
      "type": "Optional"
    }
  },
  {
    "id": "nodejs",
    "group": "T-Shape",
    "name": "Node.js",
    "description": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.\nNode.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Novice",
      "description": "Node.js CLI\n - Basic commands\n - Build-in Node.js CLI options\nNode.js Modules\n - Standard Modules\n - ES Modules\n - Module Scope\nNode.js Package Managers\n - CLI Options\n - Package Structure\nNode.js Async programming\n - Callbacks\n - Promise\nNode.js Events\n - Event-Driven Programming\nNode.js API\n - Console API\n - File System API\n - String Decoder API\n - Timer API\n - URI API\nNode.js Error Handling\n - Async errors, Promise rejections\n - Error Class\nNode.js Debugging\n - Native debugging\nNode.js Authorization\n - JWT\nNode.js Testing\n - Unit tests\nNode.js Documentation\n - JSDoc\nNode.js Loggers\n - Types of logges. Logging levels.\nNode.js Deployment\n - NPM Scripts",
      "type": "Optional"
    },
    "A3": {
      "level": "Intermediate",
      "description": "Node.js CLI\n - Basic commands\n - Build-in Node.js CLI options\n - Environment Variables\nNode.js Modules\n - Standard Modules\n - ES Modules\n - Module Scope\n - Global Objects\n - Module Load System\n - Module Object\nNode.js Package Managers\n - CLI Options\n - Package Structure\n - Package manager as a build tool\n - Package manager configuration\n - Package manager scripts\nNode.js Async programming\n - Callbacks\n - Promise\n - Async programming patterns/tools\n - async/await\nNode.js Events\n - Event-Driven Programming\n - Event Loop\n - EventEmitter\n - OS events handlers\nNode.js API\n - Console API\n - File System API\n - String Decoder API\n - Timer API\n - URI API\n - Buffer API\n - Cluster API\n - Crypto API\n - Net API\n - OS API\n - Readline API\n - Stream API\n - Zlib API\nNode.js Error Handling\n - Async errors, Promise rejections\n - Error Class\n - Custom Errors\nNode.js Network\n - HTTPS\n - Network API\nNode.js Real Time Applications\n - WebSockets\nNode.js Performance\n - Profilers\nNode.js Debugging\n - Native debugging\n - Inspectors and specialized tools\nNode.js Authorization\n - JWT\n - PassportJS\nNode.js Security\n - Basic practices and approaches\nNode.js Testing\n - Unit tests\n - Contract tests\n - Integration tests\n - TDD/BDD\nNode.js Documentation\n - JSDoc\n - Third party documentation tools / services\nNode.js ORM / ODMNode.js Frameworks  Node.js Serverless\n - Serverless code implementaiton\n - Serverless solution (based on AWS Lambda, Azure functions, Google CloudFunctions, etc.)\nNode.js Loggers\n - Types of logges. Logging levels.\n - Logging tools and libraries (Logstash, Winston etc.)\nNode.js Queue\n - Basic knowledge of tools and solutions (RabbitMQ / AtiveMQ / Kafka / SQS / SNS)\nNode.js Containerization\n - Containerization practices and approaches\n - Tools and services (Docker, Docker Compose, etc.)\nNode.js Architecture / Patterns\n - Application structure architecture principles\n - Basic GoF Creational, Structural, Behavioral patterns knowledge\n - Microservices basic principles\nNode.js Deployment\n - NPM Scripts\n - CI/CD\n - SSH/Command line tools",
      "type": "Optional"
    }
  },
  {
    "id": "nodejs-core",
    "group": "T-Shape",
    "name": "Node.js Core",
    "description": "As a runtime environment, Node.js provides a number of its own specific APIs and additional concepts that are used in development of Node.js applications and have important differences from client-side JS environments.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Novice",
      "description": "- ability to explain the Node.js runtime purpose and how core APIs differ from browser JavaScript\n - knowledge of the event driven, non blocking execution model and the event loop at a conceptual level\n - ability to use built in modules such as fs, path, os, and process with documentation\n - knowledge of CommonJS module basics and package entry points\n - ability to run scripts with node and inspect basic process arguments and environment variables",
      "type": "Optional"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- ability to build and execute small CLI or service scripts using core modules without heavy guidance\n - ability to read and write files asynchronously using callbacks, promises, and fs APIs\n - ability to manage process lifecycle, exit codes, standard input, standard output, standard error, and environment configuration\n - knowledge of timers, buffers, streams, and events for common application tasks\n - ability to install dependencies and use package.json scripts while distinguishing core modules from packages",
      "type": "Optional"
    }
  },
  {
    "id": "web-application-hosting",
    "group": "T-Shape",
    "name": "Web Application Hosting",
    "description": "The \"Web Application Hosting\" skill encompasses the knowledge and expertise required to deploy, manage, and scale web applications across various hosting environments, including cloud platforms, containerization technologies, and serverless architectures. It involves proficiency in configuring web servers, load balancing, content delivery networks (CDNs), SSL/TLS certificates, and continuous integration and deployment (CI/CD) pipelines. Additionally, this skill covers advanced topics such as infrastructure provisioning using Infrastructure as Code (IaC), edge computing solutions, performance optimization techniques, and emerging trends in web hosting technologies.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "- Understanding of web hosting concepts: shared hosting, virtual private servers (VPS)\n - Familiarity with basic web servers: Apache, Nginx, IIS\n - Knowledge of domain name registration and management\n - Awareness of SSL/TLS certificates and their importance\n - Ability to deploy a simple web application to a hosting environment (e.g., shared hosting, VPS)",
      "type": "Optional"
    }
  },
  {
    "id": "javascript-cross-mobile-platform",
    "group": "T-Shape",
    "name": "JavaScript Cross-Mobile Platform",
    "description": "For software to be considered cross-platform, it must be function on more than one computer architecture or OS. Developing such software can be a time-consuming task because different OSs have different application programming interfaces (API). For example, Linux uses a different API from Windows.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Intermediate",
      "description": "- Familiarity with various JavaScript mobile frameworks such as React Native, Ionic, and PhoneGap/Cordova.\n - Ability to create user interfaces with native look and feel using JavaScript mobile frameworks.\n - Proficiency in using JavaScript libraries for mobile-specific features such as geolocation, camera, and accelerometer.\n - Understanding of mobile application architecture and integrating with back-end services using RESTful APIs.\n - Knowledge of mobile app publishing and distribution process for both Android and iOS platforms.\n - Familiarity with performance optimization techniques for JavaScript mobile applications.",
      "type": "Optional"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Familiarity with various JavaScript mobile frameworks such as React Native, Ionic, and PhoneGap/Cordova.\n - Ability to create user interfaces with native look and feel using JavaScript mobile frameworks.\n - Proficiency in using JavaScript libraries for mobile-specific features such as geolocation, camera, and accelerometer.\n - Understanding of mobile application architecture and integrating with back-end services using RESTful APIs.\n - Knowledge of mobile app publishing and distribution process for both Android and iOS platforms.\n - Familiarity with performance optimization techniques for JavaScript mobile applications.",
      "type": "Optional"
    }
  },
  {
    "id": "common-security-knowledge",
    "group": "T-Shape",
    "name": "Common security knowledge",
    "description": "Common security knowledge refers to the general understanding of principles and techniques that allow people to keep applications, websites, and associated data sources secure. This includes topics like web application architecture, authentication and authorization mechanisms, common attack vectors, input validation and output encoding best practices, cryptography basics, client-side security considerations such as cross-site scripting (XSS) and cross-site request forgery (CSRF), server-side security considerations such as SQL injection and directory traversal attacks, server hardening guidelines, secure transport protocols like HTTPS/TLS certification options, vulnerability scanning methods, security scanners,  secure coding practices, logging and incident response procedures.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Novice",
      "description": "Basic attack vectors awareness (like XSS, SSRF, CSRF, injections).\nBasic understanding of application security mechanisms including security controls and countermeasures.",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "Strong understanding and experience with authentication and authorization mechanisms (basic, JWT, OAuth, etc).\nAbility to identify common attack vectors (XSS, CSRF, SSRF, injection, log ingestion, directory traversal, etc.) and implement compensating strategy.\nAwareness of secure application architectural components.\nFamiliarity with secure transport protocols like HTTPS/TLS.\nBasic secure coding practices knowledge.\nHashing and cryptography basics (e.g. symmetric and asymmetric encryption).",
      "type": "Required"
    }
  },
  {
    "id": "cloud-fundamentals",
    "group": "T-Shape",
    "name": "Cloud Fundamentals",
    "description": "The \"Cloud Fundamentals\" skill refers to the comprehensive knowledge and practical competence required to efficiently utilize major cloud platforms, including but not limited to AWS, Azure, and Google Cloud. Possessing this skill involves a comprehensive understanding of cloud computing principles and foundational concepts, laying the groundwork for effective interaction with a variety of cloud environments, and the ability to design and implement modern, optimized cloud-based solutions.\n \nKey elements of Cloud Fundamentals skill include:\n \nCloud Compute Services: Proficiency in using and managing virtual machines and containers in cloud environments.\n \nServerless Computing: Mastery of serverless architectures and functions, including the design, deployment, and management of serverless applications and services.\n \nCloud Storage Services: Ability to leverage object storage, block storage, and file storage capabilities provided by cloud platforms.\n \nCloud Database Services: Experience with managing and utilizing various types of cloud-based database services, including relational databases and NoSQL databases.\n \nCloud Integration and Messaging Services: Skills in handling cloud-based integration and messaging services such as message queues, event streaming, and API management.\n \nUnderstanding of Cloud Service Models: A firm grasp of various cloud service models, including Platform as a Service (PaaS), Software as a Service (SaaS), Infrastructure as a Service (IaaS), and Function as a Service (FaaS).\n \nIndividuals with this skill are typically capable of making effective decisions regarding the deployment and management of applications in the cloud, utilizing the appropriate services and tools based on the specific requirements of the task at hand. They can also design and implement complex cloud-based solutions, tailored to achieve business goals while ensuring optimal performance, reliability, and cost-efficiency.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "Familiarity with cloud concepts, terminology, and foundational principles (Cloud Service Models, Consumption-based pricing model, Cloud shared responsibility model, Serverless vs. Serverfull, Infrastructure as Code, etc.). \nBasic understanding of at least one major cloud platform and its core services.\nCloud Compute Services: \n - Basic Theoretical Understanding of Cloud Fundamentals: Demonstrate knowledge of essential cloud computing concepts, benefits, and architecture.\n - Ability to use Cloud Services in simple scenarios (create VMs, create Lambda, etc.) with guidelines. \n - Cloud Compute Services: Familiarity with VMs, containers, and concepts like scalability in cloud compute services.\n - Serverless Computing: Knowledge of serverless concepts, ability to develop and deploy serverless functions or applications.\n - Cloud Storage Services: Basic understanding of object storage, block storage, and file storage.\n - Cloud Database Services: Familiarity with at least one database (relational databases or NoSQL)\n - Cloud Integration and Messaging Services: Will be a plus, but not mandatory\n - Understanding of Cloud Service Models: Will be a plus, but not mandatory ( IaaS, PaaS, and SaaS).\nBasic understanding of cloud security best practices.",
      "type": "Required"
    }
  },
  {
    "id": "software-engineering-knowledge-and-experience",
    "group": "T-Shape",
    "name": "Software Engineering Knowledge & Experience",
    "description": "Software Engineering Knowledge & Experience encompasses knowledge of such parts of computer science as: \n - Algorithms and Data Structures\n - Networks\n - Cryptography\nKnowledge of required nowadays concepts such as: \n - Virtualization \n - Containerization\n - Deployment Strategies (Canary, Blue-Green)\nUnderstading of different types of Software Licenses and their implication on usage in commercian/non-commericla solutions.\nExperience in: \n - Troubleshooting\n - Debugging \n - Profiling\n - usage of IDEs and other development tools",
    "A1": {
      "level": "Novice",
      "description": "Knowledge of: \n - basic Algos & Data Structures\n - Network Concepts\nUnderstanding of importance of cryptography in computer systems\nBasic knowledge of:\n - DB concepts \n - types of DB (SQL, NoSQL) \nAbility to create simple queries.\nUnderstanding of: \n - containerization and virtualization technologies\n - deployment strategies and awareness of one of such\nAbility to troubleshoot and debug simple cases.",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Knowledge of \n - implementation details for different Data Structures, Networks principles\n - encryption/decryption using Symmetric-Key Algorithm and public key encryption systems\nAbility to \n - create complex queries and sql-scripts (several tables, create/delete/drop, select with join etc., merge tables)\n - ability to create and configure virtual machines, snapshots, backup, virtual devices, deployment containers using some virtualization tools\nAbility to troubleshoot complex issues like multithreading,etc.\nAbility to use most IDE features.\nKnowledge of main Software Licenses.",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "Knowledge of advanced Data Structures.\nAbility to \n - configure networks\n - optimize sql-queries\nSolid understanding of virtualization/containerization technologies (different types and solutions, advantages and disadvantages)Understanding of pros and cons of different deployment strategies, ability to select/recommend most suitable one\nAbility to profile applications.\nAbility to organize IDE usage on a project in unified way.\nAbility to decide whether particular software under a license can be used in given context.",
      "type": "Required"
    }
  },
  {
    "id": "design-patterns",
    "group": "Engineering Excellence",
    "name": "Design patterns",
    "description": "Design patterns are a set of commonly used, reusable solutions to problems encountered when developing software. They are typically related to object-oriented programming and provide guidance on how to write reliable and maintainable code. Design patterns help programmers to quickly identify the most appropriate solution for their project when implementing software designs. Additionally, they help improve code readability, reliability, and scalability. Examples of design patterns include Model-View-Controller (MVC), Factory Pattern, Observer Pattern, Dependency Injection Pattern, Strategy Pattern, State Pattern and others.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Novice",
      "description": "Knowledge of few most-common design patterns, such as GoF (e.g Decorator, Singleton, Factory), ability to properly apply simple patterns under supervision (at the level of modules/components)",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "Knowledge of main design patterns (GoF, Dependency Injection/IoC), ability to apply them without guidance",
      "type": "Required"
    }
  },
  {
    "id": "software-design",
    "group": "Engineering Excellence",
    "name": "Software Design",
    "description": "Software design is the process to transform the user requirements into software artifact (solution/product) intended to accomplish goals. Software design usually involves problem-solving and planning a software solution. This includes design of low-level components and algorithms using different well-known design paterns, and a high-level or architecture design via application of Architectural patterns, adherence to Design Principles, understanding of Programming Paradigms, ability to work with Technical Documentation (from reading to creation) and understanding and proper implementation of main Cross-Cutting Concerns (logging, error handling and secure coding)",
    "A1": {
      "level": "Novice",
      "description": "Awareness of most-common: \n - architectural patterns (Layered, Client-Server, MVC) \n - design patterns, such as GoF (Decorator, Singleton, Factory)\n - design principles (KISS, DRY, YAGNI) \nAbility to comprehend technical documentation \nKnowledge of main programming paradigms (OOP, FP, RP)\nKnowledge of cross-cutting concerns (logging, Error Handling, Secure coding)",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Ability to apply common: \n - architectural patterns (Layered, Client-Server, SOA, event-driven architecture, microservices, etc) \n - design patterns, such as GoF, Dependency Injection/IoC\n - design principles, such as GRASP, Clean Code principles, SOLID, high cohesion & low coupling\nAbility to maintain technical documentation and/or create simple ones   (how-tos, guidelines)\nAbility to implement cross-cutting concerns with guidance\nAbility to explain software design patterns usage on different layers of their solution",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "In  particular context, the ability to decide on the applicability of different: \n - architectural patterns (e.g. event-driven architecture, micro-frontends, etc) \n - various  design patterns, such as GoF, Integration patterns, Messaging patterns, Enterprise application patterns\n - design principles, architectural styles, patterns, and tactics to achieve required quality attributes on project.\nAbility to compare main programming paradigms (OOP, FP, RP), their pros/cons\nAbility to explain software design patterns usage on different layers of their solution (production project) and propose enhancements\nAbility to create technical documentation (coding standards, software engineering diagrams)\nAbility to select proper approach (patterns, 3rd party libs/frameworks) for implementation of Cross-Cutting Concerns for the whole solution and/or its significant part",
      "type": "Required"
    }
  },
  {
    "id": "software-engineering-practices",
    "group": "Engineering Excellence",
    "name": "Software Engineering Practices",
    "description": "Software engineering practices are concerned with developing and maintaining software systems that behave reliably and efficiently, are affordable to develop and maintain, and satisfy all the requirements that customers have defined for them. \nThis is collection of practices of Code Quality, CI/CD, practices working with VCS, Testing Fudamentals, best approaches and methods in Automated and Performance Testing, all that a software engineer uses on a daily basis. They equip software engineers to efficiently build computer programs and provide necessary technical \"how to\" getting the job done. The software engineering practices cover core developer activities required for producing of high quality code and thus solutions.",
    "A1": {
      "level": "Novice",
      "description": "Knowledge of: \n - Code Quality practices (Code Review, Static/Dynamic Code Analysis, etc), \n - principles and objectives of CI/CD, \n - practices working with VCS of different types (centralized/decentralized) \n - awareness what is branching strategy\n - Testing Fundamentals (on base level)\nUnderstanding of:\n - Automated Testing on all levels of Testing Pyramid: pros/cons, different test approaches, \n - non-functional requirements related to performance and how they are measured ; \nAbility to follow established practices.",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Understanding of purpose, benefits and drawbacks of Code Quality (Code Review, Static/Dynamic Code Analysis, etc).\nAbility to implement simple CI/CD related tasks.\nKnowledge of :\n - main concepts working with VCS (distributed: pull/merge-request, rebasing, stashing, forking etc)\n - some branching strategies (GitFlow, Github etc) \nAbility to create tests on different levels of Test Pyramid.\nUnderstanding of some types of Performance Testing (Load, Stress, etc).\nAbility to identify gaps and propose improvements in implementation of different practices.",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "Ability to :\n - establish required Code Quality Practices in given context (project/stream)\n - design CI/CD process, analyse it for bottlenecks \n - implement CI/CD pipelines\n - establish required test automation according to the context\n - choose appropriate VCS and bracnhing strategy\n - use advanced features of distributed VCS (Git): hooks, tags, pruning local and remote etc\n - conduct performance testing according to performance testing objectives\n - organize corresponding knowledge sharing.",
      "type": "Required"
    }
  },
  {
    "id": "software-engineering-processes",
    "group": "Engineering Excellence",
    "name": "Software Engineering Processes",
    "description": "Software Engineering Processes encompasses main knowledge and experience needed for delivering softwate solutions through application of proper Development Methodologies (or SDLC) including Secure SDLC, Work with Requirements and corresponding Estimation/work planning approaches.",
    "A1": {
      "level": "Novice",
      "description": "Knowledge of:\n - SDLC major stages and roles etc.\n - purpose of Secure-SDLC (S-SDLC)\n - main software development methodologies (Agile, Waterfall)\n - main issue tracking systems (JIRA, etc)\nAbility to: \n - work with requirement and understand purpose of acceptance criteria \n - estimate the work via simple decomposition \nUnderstanding functional and non-functional requirements.\nUnderstanding of his/her role and ability to follow stablished development processes.",
      "type": "Required"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Knowledge of most popular Agile frameworks (Scrum, Kanban), roles/events, understanding of their pros and cons.\nAbility to suggest improvements in the existing processes.\nKnowledge and ability to use different estimation techniques (by analogy, by experts, planning poker, decomposition, bucket, t-shirt, story points) and estimation notions (relative and absolute units), how to estimate unknown tasks.\nUnderstanding purpose of DoR and DoD.",
      "type": "Required"
    },
    "A3": {
      "level": "Advanced",
      "description": "Ability to establish selected software development process and/or improve existing one.\nUnderstanding of key project/methodology metrics and how to maintain predictability of the delivery process using metrics (how to treat metrics, what decisions to apply etc).\nKnowledge and practical experience in how to improve estimations in case of under/over estimations.\nAbility to: \n - plan the work and estimate for the significant  scope (component/layer/module)\n - identify the non-functional requirements and control their fulfilment\n - establish Secure Development practices in given context (team/project) and promote/support following of them",
      "type": "Required"
    }
  },
  {
    "id": "gen-ai-assisted-development",
    "group": "Engineering Excellence",
    "name": "Gen AI Assisted Development",
    "description": "Proficiency in agentic workflows using AI tools of choice. Learn AI-native ways of working required for a successful AI-Agent first implementation, maximizing productivity gains. \"Agent-first\" approach to the day-to-day tasks.",
    "A1": {
      "level": "Novice",
      "description": "- Knows the basic functionality of LLMs and conversational AI interfaces for development tasks.\n - Can install and configure AI coding tools (GitHub Copilot, Amazon Q Developer, etc.) in code editors and IDEs.\n - Knows the difference between inline suggestions, chat mode, and command-based AI interactions.\n - Knows how AI tools can automate repetitive tasks like code formatting, code explanation, basic unit testing, and simple code generation.\n - Can review, refine, use AI-generated code, or reject AI-generated suggestions.\n - Can use AI tools for basic (routine) task research and decomposition.\n - Can use AI tools for simple bug investigation and fixing (e.g., debugging a code section, consulting error logs).",
      "type": "Optional"
    },
    "A2": {
      "level": "Intermediate",
      "description": "Includes all competencies from the previous level, plus:\n - Has experience with at least one AI Coding Assistant (e.g., GitHub Copilot, Cursor, Claude Code).\n - Can use Plan/Think mode to decompose complex tasks before agent execution.\n - Is able to use AI tools (including CLI) to implement coding tasks, generate tests, fix bugs, and create documentation.\n - Has experience using AI agents for codebase exploration, bug investigation, and test generation.\n - Can write and maintain project-level instruction files (.cursorrules, CLAUDE.md, copilot-instructions.md).\n - Has experience configuring and using MCPs for external system integration\n - Knows principles of agentic workflows: planning, tool use, execution, observation, and self-correction loops.\n - Knows how agent context affects output quality and how to optimize it.\n - Knows how agents interact with the filesystem, terminal, and development environment, including permissions and approval workflows.",
      "type": "Optional"
    },
    "A3": {
      "level": "Intermediate",
      "description": "Includes all competencies from the previous level, plus:\n - Has experience with at least one AI Coding Assistant (e.g., GitHub Copilot, Cursor, Claude Code).\n - Can use Plan/Think mode to decompose complex tasks before agent execution.\n - Is able to use AI tools (including CLI) to implement coding tasks, generate tests, fix bugs, and create documentation.\n - Has experience using AI agents for codebase exploration, bug investigation, and test generation.\n - Can write and maintain project-level instruction files (.cursorrules, CLAUDE.md, copilot-instructions.md).\n - Has experience configuring and using MCPs for external system integration\n - Knows principles of agentic workflows: planning, tool use, execution, observation, and self-correction loops.\n - Knows how agent context affects output quality and how to optimize it.\n - Knows how agents interact with the filesystem, terminal, and development environment, including permissions and approval workflows.",
      "type": "Optional"
    }
  },
  {
    "id": "leadership",
    "group": "Leadership & Soft Skills",
    "name": "Leadership",
    "description": "Leadership is a multifaceted concept that encompasses a set of competencies enabling one to lead, influence, and guide individuals, teams, or entire organizations.\nLeadership involves the ability to:\n - Influence others: Persuading and motivating people to work toward a common goal or vision.\n - Guide teams and organizations: Steering groups in diverse contexts - be it in business, politics, the military, or non-profit sectors - toward success.\n - Inspire confidence and trust: Cultivating an environment where team members feel valued and committed to shared objectives.\n - Adapt to change: Demonstrating flexibility and resilience in dynamic and often complex environments.\nThe concept of leadership is not restricted to any single definition or framework; rather, it embodies a range of theories and practices that can vary according to context, culture, and individual style. Whether viewed as an innate ability or a set of learned behaviors, leadership plays a crucial role in shaping strategies, empowering teams, and driving organizational success.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "- Emerges as a leader based on feedback from peers and managers.\n - Directs the group toward a common goal and takes responsibility for team/group outcomes.\n - Efficiently organizes teamwork and engages employees in collaborative initiatives.",
      "type": "Required"
    }
  },
  {
    "id": "ownership",
    "group": "Leadership & Soft Skills",
    "name": "Ownership",
    "description": "Commitment to taking initiative and responsibility for both individual and team actions. This commitment extends beyond completing assigned tasks and includes actively ensuring that all actions and outcomes align with the team's goals, ultimately contributing to the overall success of the organization.",
    "A1": {
      "level": "Novice",
      "description": "- Demonstrates a basic understanding of the importance of taking initiative and responsibility\n - Shows consideration for the team's goals and overall success of the organization\n - Completes assigned tasks on time and to the best of their ability\n - Requires supervision and guidance to ensure actions align with team objectives",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "- Demonstrates a basic understanding of the importance of taking initiative and responsibility\n - Shows consideration for the team's goals and overall success of the organization\n - Completes assigned tasks on time and to the best of their ability\n - Requires supervision and guidance to ensure actions align with team objectives",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Takes initiative and responsibility for self and team actions\n - Actively communicates and collaborates with team members to ensure alignment with goals\n - Able to go beyond assigned tasks to seek additional responsibilities and contribute more\n - Works independently with minimal supervision to achieve team objectives",
      "type": "Required"
    }
  },
  {
    "id": "conflict-management",
    "group": "Leadership & Soft Skills",
    "name": "Conflict management",
    "description": "The practice of being able to identify and handle conflicts sensibly, fairly, and efficiently. It is the process of dealing with (perceived) incompatibilities or disagreements arising from, for example, diverging opinions, objectives, and needs.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Novice",
      "description": "- Can identify a conflict situation and understand the subject and the reasons for the conflict. \n - If they are unable to resolve a conflict situation, they can escalate it to the right person.",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Prevents conflict situations: encourages open and constructive conversations, stops counter-productive confrontation. \n - Can switch from emotions to the subject of the conflict and lead a constructive discussion by identifying real interests of the opponent. \n - Is oriented towards cooperation and consensus, looks for win/win solutions. \n - Is able to avoid escalations in most of the situations.",
      "type": "Optional"
    }
  },
  {
    "id": "negotiations",
    "group": "Leadership & Soft Skills",
    "name": "Negotiations",
    "description": "Ability to effectively explore alternatives and bring compelling arguments to get others on board or resolve business case",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "- Understands own interests and needs well\n - Sets clear negotiation goals and focus on them during the negotiations\n - Anticipates the arguments of the other side\n - Generates multiple solutions in their area of expertise and articulates their value for the opponents\n - Holds negotiations in accordance with the country/culture-specific patterns relevant to project/account",
      "type": "Optional"
    }
  },
  {
    "id": "managing-teamwork",
    "group": "Leadership & Soft Skills",
    "name": "Managing Teamwork",
    "description": "The ability to lead a team towards shared goals by demonstrating and promoting the principles of being Hungry, Humble, and Smart, while fostering an inclusive environment that values cross-cultural communication and awareness. It involves actively managing collaboration among team members, ensuring that diverse perspectives are integrated through open communication and collective decision-making.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "- Supports basic coordination within the team by clarifying responsibilities, tasks, and expectations.\n - Encourages open sharing of information and ideas, ensuring all team members stay aligned.\n - Demonstrates Hungry, Humble, Smart behaviors in interactions and encourages others to do the same.\n - Recognizes cultural and communication differences and responds with respect, seeking guidance when needed.",
      "type": "Required"
    }
  },
  {
    "id": "consultancy",
    "group": "Leadership & Soft Skills",
    "name": "Consultancy",
    "description": "The ability to provide expert advice and recommendations to address the needs of internal and external clients. It encompasses actively understanding the concerns of various stakeholders and offering valuable insights. This competency goes beyond advice, including effective client management and support for implementing solutions, fostering positive interactions and relationships.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "- Actively listens to clients and stakeholders to understand their concerns and needs\n - Provides basic advice and recommendations based on limited knowledge and experience\n - Asks questions to gather more information and clarify requirements\n - Demonstrates basic client management skills by maintaining positive interactions and relationships",
      "type": "Required"
    }
  },
  {
    "id": "delegation",
    "group": "Leadership & Soft Skills",
    "name": "Delegation",
    "description": "Delegation is the managerial practice of assigning responsibility and appropriate authority for specific tasks, decisions, or outcomes to another person while retaining overall accountability for results. It helps managers balance workload, focus on higher priority work, and improve operational efficiency across teams. Effective delegation requires clear expectations, defined scope, agreed deadlines, and the right level of decision making authority. It also depends on matching tasks to capability, providing needed resources, and establishing follow up without unnecessary control. In people management, delegation supports employee development by creating opportunities to build confidence, skills, and ownership. When used well, it improves responsiveness, strengthens team performance, and enables better use of leadership capacity.\nKey features\n - Transfers specific responsibilities and authority while keeping accountability with the manager.\n - Clarifies the desired outcome, scope, constraints, and success criteria for the assigned work.\n - Aligns tasks with employee skills, experience, readiness, and development goals.\n - Establishes decision making boundaries to avoid confusion and duplication of effort.\n - Includes access to resources, information, and support needed to complete the work.\n - Uses appropriate check in points and progress reviews to maintain alignment and control.\n - Encourages ownership, initiative, and problem solving at the team level.\n - Helps managers prioritize strategic activities and reduce operational bottlenecks.\n - Supports succession development by expanding capability and confidence across the team.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "Delegation - Novice\n - Delegates task responsibility to appropriate subordinates (considering positive and negative impact of delegation);\n - Defines and communicates basic parameters of delegated tasks (milestones and deadlines, type of control, expected results).\nCan delegate only annoying low level tasks that don't require tracking progress",
      "type": "Optional"
    }
  },
  {
    "id": "communication",
    "group": "Leadership & Soft Skills",
    "name": "Communication",
    "description": "Communication refers to the ability to express oneself clearly and accurately and establish meaningful connections with others both face-to-face and online. \nCommunication includes verbal and written forms of communication and involves such abilities as communicating ideas to others, building constructive dialogue, active listening and building trust, giving and receiving feedback, conflict management. Also, communication involves business correspondence and meeting facilitation.",
    "A1": {
      "level": "Novice",
      "description": "- Recognizes the importance of effective communication in the workplace. \n - Seeks to learn about different ways of effective communication.\n - Demonstrates a willingness to adapt their communication strategies to new contexts. \n - Is aware of the rules of effective business correspondence and is able to use business correspondence effectively.",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "- Recognizes the importance of effective communication in the workplace. \n - Seeks to learn about different ways of effective communication.\n - Demonstrates a willingness to adapt their communication strategies to new contexts. \n - Is aware of the rules of effective business correspondence and is able to use business correspondence effectively.",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Is able to communicate effectively with people in their team and beyond. \n - Demonstrates the ability to build dialogues: listen actively and clarify. \n - Is able to give and receive constructive feedback Is able to use business correspondence effectively and diplomatically. \n - Is able to facilitate a team meeting.",
      "type": "Required"
    }
  },
  {
    "id": "business-acumen",
    "group": "Leadership & Soft Skills",
    "name": "Business Acumen",
    "description": "The ability to understand and analyze complex business situations, make informed decisions, and have a deep understanding of the broader context in which the organization operates. It involves effectively handling financial information and using it to drive strategic goals and achieve desired outcomes.  Having strong business acumen allows individuals to see the big picture and understand how different aspects of a business work together.",
    "A1": {
      "level": "Novice",
      "description": "- Getting to know basic business terminology and concepts\n - Understands basic financial statements and their importance\n - Able to identify the key components of a EPAM business model\n - Recognizes the different functions and departments within a business",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "- Getting to know basic business terminology and concepts\n - Understands basic financial statements and their importance\n - Able to identify the key components of a EPAM business model\n - Recognizes the different functions and departments within a business",
      "type": "Required"
    },
    "A3": {
      "level": "Novice",
      "description": "- Getting to know basic business terminology and concepts\n - Understands basic financial statements and their importance\n - Able to identify the key components of a EPAM business model\n - Recognizes the different functions and departments within a business",
      "type": "Required"
    }
  },
  {
    "id": "motivation",
    "group": "Leadership & Soft Skills",
    "name": "Motivation",
    "description": "Motivation is the ability to encourage and sustain effort toward organizational goals by aligning individual needs, values, and rewards with team objectives. In people management, it includes understanding what drives different employees and applying appropriate methods to increase engagement and commitment. Effective motivation supports performance, retention, accountability, and adaptability in changing work environments. It combines intrinsic factors such as purpose, autonomy, and mastery with extrinsic factors such as recognition, incentives, and feedback. Managers use motivation to create conditions in which people choose to contribute consistently and perform at a high level. Strong motivational skill requires empathy, clear communication, and the ability to tailor approaches to the individual and the situation.  \nKey features\n - Identifies individual and team drivers that influence effort and behavior.\n - Uses recognition, feedback, and rewards to reinforce desired performance.\n - Supports intrinsic motivation through purpose, autonomy, and growth opportunities.\n - Aligns personal goals with team and organizational objectives.\n - Adapts motivational approaches to different personalities, roles, and contexts.\n - Builds engagement by creating trust, clarity, and a supportive work environment.\n - Improves accountability by linking expectations to meaningful outcomes.\n - Helps reduce disengagement, turnover, and performance drift.\n - Strengthens resilience during change, pressure, and periods of uncertainty.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "Motivation/engagement - Novice\n - Motivates direct subordinates and current project members.\n - Aware of each person’s needs, aspirations, strengths and uses them to get their best on the job, assigns tasks in accordance.\n - Helps individuals to see their personal benefits of doing their job well.\n - Makes individuals feel their work is important, shares ownership and visibility.\nMotivates direct subordinates and current project members.\n - Aware of each person’s needs, aspirations, strengths and uses them to get their best on the job, assigns tasks in accordance.\n - Helps individuals to see their personal benefits of doing their job well.\n - Makes individuals feel their work is important, shares ownership and visibility.",
      "type": "Optional"
    }
  },
  {
    "id": "developing-others",
    "group": "Leadership & Soft Skills",
    "name": "Developing Others",
    "description": "Ability to proactively address performance challenges, foster continuous growth, and create an environment that encourages skill development, open communication, and collaboration. It includes coaching, preparing successors, setting high standards, maximizing team talents, and inspiring a culture of continuous learning and excellence.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "- Addresses performance problems proactively, seeking to understand root causes and collaboratively finding solutions.\n - Actively engages team members in discussions about their career aspirations and interests to inform Personal Development Plans (PDPs).\n - Encourages a growth mindset by sharing information about company opportunities and the value of ongoing learning.\n - Assists in preparing individuals for assessments by providing constructive feedback and guidance on improvement areas.",
      "type": "Required"
    }
  },
  {
    "id": "driving-change-and-innovation",
    "group": "Leadership & Soft Skills",
    "name": "Driving Change and Innovation",
    "description": "Ability to guide individuals, teams and wider company through news and more effective ways of responding to a constantly changing environment by facilitating both changes to existing and creating new processes, products, etc.",
    "A1": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A2": {
      "level": "Not applicable",
      "description": "Not applicable",
      "type": "Not applicable"
    },
    "A3": {
      "level": "Novice",
      "description": "- Promotes understanding of change; works to address resistance to change or any negative perception of it in the team \n - Suggests possible change paths or solutions to others when current solutions or approaches no longer apply.\n - Spots work cases where high risks are expected and some change is needed.\n - Eagerly challenges the status quo and tries approaches that are out of the scope of standard procedures.\n - Generates a variety of approaches and solutions in a semi-structured environment.\n - Generally analyzes innovative ideas and proposals to recognize the ones that have a potential, can plan and operationalize them in general.",
      "type": "Required"
    }
  },
  {
    "id": "diversity-equity-and-inclusion",
    "group": "Leadership & Soft Skills",
    "name": "Diversity, Equity, and Inclusion",
    "description": "Valuing diversity and actively seeking out opportunities to learn about and understand different perspectives and experiences; creating an inclusive work environment that promotes equity and belonging for all individuals regardless of race, ethnicity, religion, gender, sexuality/sexual orientation, age, ability, socio-economic status, or other differences; demonstrating sensitivity and awareness and being able to communicate effectively with diverse groups; advocating for diversity, equity, and inclusion both internally and externally.",
    "A1": {
      "level": "Novice",
      "description": "- Understands personal biases and assumptions mechanisms.\n - Is ready to reflect on his/her own perceptions, demonstrates an understanding of his/her own biases and behaviors when addressing stereotypes\n - Initiates critical reflection on cultural differences in the team, challenges bias and intolerance\n - Demonstrates respect towards the values of different cultures.\n - Treats everybody equally, identifies and avoids discriminative behavior.\n - Is open to various standards, values and rules.",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "- Understands personal biases and assumptions mechanisms.\n - Is ready to reflect on his/her own perceptions, demonstrates an understanding of his/her own biases and behaviors when addressing stereotypes\n - Initiates critical reflection on cultural differences in the team, challenges bias and intolerance\n - Demonstrates respect towards the values of different cultures.\n - Treats everybody equally, identifies and avoids discriminative behavior.\n - Is open to various standards, values and rules.",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Demonstrates an understanding of cultural differences reflected in how people communicate with each other, how they perceive messages and transfer them.\n - Recognizes and interprets verbal and non-verbal communication in a culturally-appropriate manner. Is sensitive to different norms of politeness.\n - Can identify expectations about communication and discuss them, establishes effective dialog about common communication rules.",
      "type": "Required"
    }
  },
  {
    "id": "being-a-team-player",
    "group": "Leadership & Soft Skills",
    "name": "Being a Team Player",
    "description": "The ability to work cooperatively with colleagues in diverse cross-cultural teams. It includes aligning individual goals with common team objectives, communicating transparently and empathetically with respect and tact, contributing to team success with ideas, suggestions and opinions, acting as agreed in the team, building and maintaining trust, resolving conflicts in a constructive way, contributing to team development.",
    "A1": {
      "level": "Novice",
      "description": "- Shows willingness to work in diverse cross-cultural teams\n - Is ready to align their individual goals with common team goals\n - Asks for help/support and offers help/support when needed\n - Communicates with respect and clarity to achieve joint success and build and maintain trust",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "- Shows willingness to work in diverse cross-cultural teams\n - Is ready to align their individual goals with common team goals\n - Asks for help/support and offers help/support when needed\n - Communicates with respect and clarity to achieve joint success and build and maintain trust",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Demonstrates good communication skills by transparent and empathetic way of communication  \n - Acts as agreed in the team\n - Completes shared tasks and responsibilities timely and effectively  \n - Displays adaptability and flexibility to work effectively \n - Shows initiative in problem-solving and contributing ideas to achieve team goals",
      "type": "Required"
    }
  },
  {
    "id": "adaptability",
    "group": "Leadership & Soft Skills",
    "name": "Adaptability",
    "description": "The capacity to make appropriate responses to changed or changing situations; the ability to modify or adjust one's behavior in meeting different circumstances or different people.",
    "A1": {
      "level": "Novice",
      "description": "- Understands the importance of adaptation as well as acknowledge that efficiency could depend on the variability of one's behavior;\n - Willing to adapt to changes in work priorities, assigned scope of responsibilities;\n - Takes conscious attempts to adapt one's own behavior to the state and circumstances of common situations in a pre-structured framework;",
      "type": "Required"
    },
    "A2": {
      "level": "Novice",
      "description": "- Understands the importance of adaptation as well as acknowledge that efficiency could depend on the variability of one's behavior;\n - Willing to adapt to changes in work priorities, assigned scope of responsibilities;\n - Takes conscious attempts to adapt one's own behavior to the state and circumstances of common situations in a pre-structured framework;",
      "type": "Required"
    },
    "A3": {
      "level": "Intermediate",
      "description": "- Able to change behavior strategy if the situation needs it; chooses strategies from learned ones;\n - Adapts to a change in priorities, objectives and strategy;\n - Independently adapt one's own behavior to different situations and under varying conditions to the respective state and circumstances;",
      "type": "Required"
    }
  },
  {
    "id": "english",
    "group": "English",
    "name": "English",
    "description": "English is a language of international communication and one of the most spoken languages in the world. It is the official language in 53 countries and is spoken as a first language by around 400 million people worldwide. English has become the language of business, politics, IT, and cultural exchange. It is a necessary skill for any professional of an international organization. English is a language that unites EPAM employees in all locations and teams.\nThe EPAM English Language Assessment tests English language ability from A0 to C2 levels of the Common European Framework of Reference (CEFR): levels A1-A2 (Basic Command), B1-B2 (Effective Command), C1-C2 (Operational Command).",
    "A1": {
      "level": "B1",
      "description": "This page is recommended for EPAMers who now have A2+ level of English. To get B1 level you should be able to:\n - understand the main points of clear standard speech on familiar topics that are often met in work, education, holiday, etc;\n - deal, in a limited way, with most situations while travelling in an area where English is spoken;\n - produce simple connected text on topics that are familiar or of personal interest;\n - produce a simple connected text (e.g. essay, article) on a range of familiar topics by linking a series of shorter elements into a longer structured whole;\n - give their impressions, feelings and opinions on a range of personal interest topics (e.g. lifestyles, culture, stories), describe everyday aspects of their life/work/experiences, list advantages and disadvantages, with simple words and expressions.",
      "type": "Core"
    },
    "A2": {
      "level": "B1+",
      "description": "This page is recommended for EPAMers who now have B1 level of English. To get B1+ level you should be able to:\n - understand the main points of clear messages on familiar and some abstract topics;\n - deal with most situations while travelling in an area where English is spoken, without great difficulty;\n - produce simple connected text on topics that are familiar or of personal interest, as well as on some more complex topics;\n - describe experiences and events, dreams, hopes and ambitions and give reasons and explanations for opinions and plans.\n - give their impressions, feelings and opinions on a range of familiar topics, describe everyday aspects of their life/work/experiences, list advantages and disadvantages, using simple language.",
      "type": "Core"
    },
    "A3": {
      "level": "B2",
      "description": "This page is recommended for EPAMers who now have B1+ level of English. To get B2 level you should be able to:\n - understand the main ideas of complex text on both specific and abstract topics, including technical discussions in their field of specialization;\n - interact with a degree of fluency and spontaneity that makes regular interaction with proficient English speakers quite possible;\n - produce reasonably detailed texts on a variety of familiar topics, combining and evaluating information from different sources, explaining a viewpoint on an issue and giving the advantages and disadvantages of different options;\n - produce a detailed description of a complex process, write a report or article developing an argument, giving reasons and explaining advantages and disadvantages.",
      "type": "Core"
    }
  }
];

export const skillGroups = [...new Set(skills.map(s => s.group))];
