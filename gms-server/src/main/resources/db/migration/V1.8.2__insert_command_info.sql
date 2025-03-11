INSERT INTO command_info (syntax, level, enabled, clazz, default_level)
SELECT 'ai', 0, 1, 'AICommand', 0
WHERE NOT EXISTS (SELECT * FROM command_info WHERE syntax = 'ai');