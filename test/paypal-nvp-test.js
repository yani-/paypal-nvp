var vows   = require( 'vows' );
var assert = require( 'assert' );
var topic  = require( '../lib/paypal-nvp' );

vows.describe( 'paypal-npm' ).addBatch({
	"new Paypal_Nvp( 'user', 'pass', 'license' )": {
		topic: function() {
			return new topic.Paypal_Nvp( 'user', 'pass', 'license' );
		},
		'sets api_username': function( topic ) {
			assert.equal( topic.api_username, 'user' );
		},
		'sets api_password': function( topic ) {
			assert.equal( topic.api_password, 'pass' );
		},
		'sets api_signature': function( topic ) {
			assert.equal( topic.api_signature, 'license' );
		},
		'sets sandbox': function( topic ) {
			assert.isFalse( topic.sandbox );
		}
	},
	"enable_sandbox": {
		topic: function() {
			var t = new topic.Paypal_Nvp( 'user', 'pass', 'license' );
			t.enable_sandbox();
			return t;
		},
		'sets sandbox to true': function( topic ) {
			assert.isTrue( topic.sandbox );
		}
	}
}).export(module);