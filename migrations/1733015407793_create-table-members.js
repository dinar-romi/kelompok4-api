exports.up = (pgm) => {
  pgm.createTable('members', {
    id: {
      type: 'serial',
      primaryKey: true,
    },
    nama: {
      type: 'varchar(100)',
      notNull: true,
    },
    jabatan: {
      type: 'varchar(100)',
    },
    about: {
      type: 'text',
    },
    social_media: {
      type: 'jsonb',
    },
    no_hp: {
      type: 'varchar(20)',
    },
    banner_image: {
      type: 'text',
    },
    profile_image: {
      type: 'text',
    },
    created_at: {
      type: 'timestamp',
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp',
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('members');
};
