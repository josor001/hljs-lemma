/*
Language: LEMMA
Author: Jonas Sorgalla <jonas.sorgalla@fh-dortmund.de>
Description: Provides highlighting for models written in the textual modeling language LEMMA
Website: https://github.com/SeelabFhdo/lemma
*/

/** @type LanguageFn */
function lemma(hljs) {

  const KEYWORDS = [
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
    "@sync",
    "@async",
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
    "true",
    "false",
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

  const BUILT_INS = [
    "float",
    "date",
    "string",
    "int",
    "char",
    "boolean",
    "date",
    "short",
    "byte",
    "double",
    "unspecified"
  ];

  const LITERALS = [
    "true",
    "false"
  ];

  const DDD = {
    scope: "symbol",
    match: /<\w*(\s*,?\s*\w*)*>/
  };

  return {
    name: 'lemma',
    illegal: /[!@#$^&',?+~`|:]/,
    case_insensitive: true,
    keywords: KEYWORDS,
    built_in: BUILT_INS,
    literal: LITERALS,
    contains: [
      DDD,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.NUMBER_MODE
    ]
  };
}

module.exports = lemma;
