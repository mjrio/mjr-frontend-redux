/* angular2 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* redux */
import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer, middleware, enhancers } from './store';

/* components */
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';
import { TodoListComponent } from './todo-list.component';
import { AppFooterComponent } from './app-footer.component';
import { TodoItemComponent } from './todo-item.component';

@NgModule({
    declarations: [
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
      NgRedux,
      DevToolsExtension ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private ngRedux: NgRedux<IAppState>,  private devTool: DevToolsExtension) {
        this.ngRedux.configureStore(
            rootReducer,
            {},
            middleware,
            [ ...enhancers, devTool.isEnabled() ? devTool.enhancer() : f => f]
        );
    }
}
