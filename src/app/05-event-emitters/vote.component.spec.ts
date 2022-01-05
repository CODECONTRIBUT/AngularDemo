import { VoteChangeComponent } from './vote.component';

describe('VoteChangeComponent', ()=> {
    var component: VoteChangeComponent;

    beforeEach(()=> {
        component = new VoteChangeComponent();
    })

    it('should raise voteChanged event when upvoted', ()=> {
        let totalVotes = null;
        component.voteChanged.subscribe(tv => totalVotes=tv);
        component.upVote();
        //expect(totalVotes).not.toBeNull();
        expect(totalVotes).toBe(1);
    })
})