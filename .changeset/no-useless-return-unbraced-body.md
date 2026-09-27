---
"@biomejs/biome": patch
---

Fixed [#11898](https://github.com/biomejs/biome/issues/11898): the safe fix of `noUselessReturn` no longer removes a `return;` that is the whole body of an unbraced `if`, `else` or labeled statement, which used to leave a file that does not parse. Removing a `return;` now also keeps the comments that were attached to it.
