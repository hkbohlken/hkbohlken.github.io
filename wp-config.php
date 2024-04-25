<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'HeatherBohlkenPortfolio' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X#_dHO(ufp!{7fp%YgOJ+IC2nqoip4O&^Cs`}59=uu.SK&5y39nKS5/!Gjo>6|Dc' );
define( 'SECURE_AUTH_KEY',  'Bgy-R4a&R,xAN(:Cq;0=1IVbxO;5,9Cn6jN_5DnuKsaER_Zl|(O]N2{Z(^9w3Mos' );
define( 'LOGGED_IN_KEY',    '|QP>jC D]nBHh<jHW{[:FMHu|V,$>2)8,^eF+v|l[r8jZ[i@#w-EYN6/fBsiwnP[' );
define( 'NONCE_KEY',        'X1w`d/hmW.0#=D}_SH6> L2Ok#q?>3xL4*:u[o`v&:Io5,OFUDGm8;y8Gabp~VQE' );
define( 'AUTH_SALT',        'z@jD AII{PsCPZ[YF3#19TRU:f8rE}t<HV C8d/wk(~<ZH4jX`@mjWOU~T2kX0gD' );
define( 'SECURE_AUTH_SALT', 'G2Np4D^1zY@ g;Y89zY3*1%u4j3C38QiO]p7NG2;XTs(U6sG1xZ[oLpL,25nKo~{' );
define( 'LOGGED_IN_SALT',   's1,SS7+?Xh{UTH?#clZNR]6!(HT{)x-}ktqtL_D]!7rPUxz{1|_02R4PDmoD]_0-' );
define( 'NONCE_SALT',       '$NrLKA;XdER2jc($1TyKa{r_:*n&)?&7.gU*:W6uu93R.opIt@uAwV /^?BmIQdz' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
