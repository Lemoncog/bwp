/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'progress section', function() {
  beforeEach( module( 'ngBoilerplate.progress' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));


  it( 'should have a backing array with data', inject( function($controller) {
    var scope = {},
    ctrl = $controller('ProgressCtrl', {$scope:scope});

    expect( scope.progressTree.length ).toBeGreaterThan(0);
  }));
});

