/*
Language: LEMMA
Author: Jonas Sorgalla <jonas.sorgalla@fh-dortmund.de>
Description: Provides highlighting for models written in the textual modeling language LEMMA
Website: https://github.com/SeelabFhdo/lemma
*/

module.exports = function lemma(hljs) {

  const MAIN_KEYWORDS = [
    "import",
    "datatypes",
    "from",
    "as",
    "functional",
    "microservice",
    "microservices",
    "@endpoints",
    "protocols",
    "sync",
    "data",
    "formats",
    "default",
    "with",
    "format",
    "async",
    "public",
    "interface",
    "out",
    "deployment",
    "technologies",
    "operation",
    "environments",
    "container",
    "technology",
    "environment",
    "deploys",
    "values",
    "basic",
    "endpoints",
    "required",
    "long",
    "version",
    "context",
    "in",
    "immutable",
    "hide",
    "types",
    "primitive",
    "type",
    "based",
    "on",
    "service",
    "aspects",
    "for",
    "fields",
    "parameters",
    "selector",
    "aspect",
    "internal",
    "extends",
    "compatibility",
    "matrix",
    "infrastructure",
    "operations",
    "properties",
    "used",
    "by",
    "nodes",
    "is",
    "fault",
    "complex",
    "interfaces",
    "utility",
    "op",
    "return",
    "domainOperations",
    "depends",
    "collection",
    "list",
    "structure",
    "enum",
    "context",
    "function",
    "procedure"
  ];

  const TYPES = [
    "float",
    "date",
    "string",
    "long",
    "int",
    "char",
    "boolean",
    "date",
    "short",
    "byte",
    "double",
    "unspecified",

  ];

  const LITERALS = [
    "true",
    "false"
  ];

  const DDD = {
    scope: "symbol",
    begin: "<",
    end: ">"
  };

  const NEW_TITLE = {
    begin: [
      /structure|context|collection|list|enum|microservice|interface/,
      /\s+/,
      /[a-zA-Z0-9_:.-]*/,
    ],
    beginScope: {
      1: "keyword",
      3: "title"
    },
  }

  const KEYWORDS = {
    keyword: MAIN_KEYWORDS,
    literal: LITERALS,
    type: TYPES
  };

  //Service DSL
  const API_COMMENTS = {
    scope: "comment",
    begin: "---",
    end: "---",
    contains: [
      {
        scope: 'strong', begin: '@\\w+'
      }
    ],
    relevance: 8
  };



  //Matches everything that starts with an @ and ends with a whitespace or "(" which is excluded
  const IMPORTS = {
    scope: "symbol",
    match: /@[a-zA-Z0-9_:.]*(?=\s|\()/,
    relevance: 0
  };

  //Matches everything that starts with an @ and ends with a whitespace or "(" which is excluded
  const METHODS = {
    scope: "title.function",
    match: /\s+\w*(?=\()/,
    relevance: 0
  };

  return {
    name: 'lemma',
    illegal: /[!@#$^&',?+~`|:]/,
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      DDD,
      NEW_TITLE,
      API_COMMENTS,
      IMPORTS,
      METHODS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.NUMBER_MODE
    ]
  };
}
